
import { API_BASE_URL } from '../config/api.js';
import React, { useState, useEffect } from 'react';
import {
  Plus,
  Printer,
  ArrowLeft,
  Eye,
  X,
  Trash2,
  Receipt,
  FileText,
  IndianRupee,
  CalendarDays,
  Building2,
  MapPin,
  Percent,
  Download,
  CheckCircle2,
    FileSpreadsheet

} from 'lucide-react';
import { useLanguage } from "../context/LanguageContext.jsx";
export default function BillingPage() {
  const { t } = useLanguage();
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  const unitOptions = [
    'sqft', 'cum', 'bags', 'r', 'kg', 'nos', 'hours', 'days', 'ls'
  ];

  const [isGst, setIsGst] = useState(true);
  const [gstRate, setGstRate] = useState(18);
  const [clientName, setClientName] = useState('');
  const [clientGstin, setClientGstin] = useState('');
  const [siteLocation, setSiteLocation] = useState('');

  const [items, setItems] = useState([
    {
      sn: 1,
      description: '',
      unit: 'sqft',
      qty: 1,
      discount: 0,
      rate: 0
    }
  ]);

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${API_BASE_URL}/api/invoices`);

      if (response.ok) {
        const data = await response.json();
        setInvoices(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error('Error fetching invoices:', error);
    } finally {
      setLoading(false);
    }
  };

  const getItemAmount = (item) => {
    const qty = Number(item.qty) || 0;
    const rate = Number(item.rate) || 0;
    const discount = Number(item.discount) || 0;

    return qty * rate * (1 - discount / 100);
  };

  const calculateInvoiceTotals = (inv) => {
    const invoiceItems = Array.isArray(inv.items) ? inv.items : [];

    const lumSum = invoiceItems.reduce(
      (acc, item) => acc + getItemAmount(item),
      0
    );

    const gstAmount = inv.isGst
      ? lumSum * (Number(inv.gstRate) || 0) / 100
      : 0;

    return {
      lumSum,
      gstAmount,
      finalAmount: lumSum + gstAmount
    };
  };

  const formLumsum = items.reduce(
    (acc, item) => acc + getItemAmount(item),
    0
  );

  const formGstAmount = isGst
    ? formLumsum * (Number(gstRate) || 0) / 100
    : 0;

  const formFinalAmount = formLumsum + formGstAmount;

  const handleAddItem = () => {
    setItems([
      ...items,
      {
        sn: items.length + 1,
        description: '',
        unit: 'sqft',
        qty: 1,
        discount: 0,
        rate: 0
      }
    ]);
  };

  const handleRemoveItem = (index) => {
    if (items.length === 1) return;

    setItems(
      items
        .filter((_, i) => i !== index)
        .map((item, idx) => ({
          ...item,
          sn: idx + 1
        }))
    );
  };

  const handleItemChange = (index, field, value) => {
    setItems(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  const resetForm = () => {
    setClientName('');
    setClientGstin('');
    setSiteLocation('');
    setGstRate(18);

    setItems([
      {
        sn: 1,
        description: '',
        unit: 'sqft',
        qty: 1,
        discount: 0,
        rate: 0
      }
    ]);
  };

  const handleCreateInvoice = async (e) => {
    e.preventDefault();

    const newInvoice = {
      id: `INV-${Date.now()}`,
      date: new Date().toLocaleDateString('en-GB'),
      isGst,

      company: {
        name: 'NEXTGEN CONSTRUCTION',
        address:
          'S No 346/3/B/4, Ground floor, Karbharinagar, Jamdar Road, Baramati Pune, 413102',
        gstin: isGst ? '27CFDPN2325F1ZP' : '',
        bankName:
          'COSMOS BANK THE COSMOS CO-OP. BANK LTD. (Multistate Scheduled Bank)',
        accountNo: '0141001011972 (CURRENT ACCOUNT)',
        ifsc: 'COSB0000014'
      },

      billFrom: {
        name: clientName || 'Client Name',
        gstin: isGst ? clientGstin : ''
      },

      siteLocation: siteLocation || 'Main Project Site',

      items: items.map((item, idx) => ({
        ...item,
        sn: idx + 1,
        qty: Number(item.qty) || 0,
        discount: Number(item.discount) || 0,
        rate: Number(item.rate) || 0
      })),

      gstRate: isGst ? Number(gstRate) || 0 : 0
    };

    try {
const response = await fetch(`${API_BASE_URL}/api/invoices`, {
          method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newInvoice)
      });

      if (response.ok) {
        const savedInvoice = await response.json();

        setInvoices(prev => [savedInvoice, ...prev]);
        setShowCreateModal(false);
        resetForm();
      } else {
        const errorData = await response.json().catch(() => ({}));
        alert(errorData.message || 'Unable to save invoice.');
      }
    } catch (error) {
      console.error('Error saving invoice:', error);
      alert('Unable to connect to the server.');
    }
  };



const handleDeleteInvoice = async (inv) => {
  if (!window.confirm(`Are you sure you want to delete invoice ${inv.id}?`)) {
    return;
  }

  const invoiceIdentifier = inv._id || inv.id;

  const deleteUrl = `${API_BASE_URL}/api/invoices/${encodeURIComponent(invoiceIdentifier)}`;

  try {
    console.log('Deleting invoice:', invoiceIdentifier);
    console.log('DELETE URL:', deleteUrl);

    const response = await fetch(deleteUrl, {
      method: 'DELETE'
    });

    const responseText = await response.text();

    console.log('Delete status:', response.status);
    console.log('Delete response:', responseText);

    let data = {};

    try {
      data = responseText ? JSON.parse(responseText) : {};
    } catch {
      throw new Error(
        `Backend returned invalid JSON. Status: ${response.status}. Response: ${responseText.substring(0, 200)}`
      );
    }

    if (!response.ok) {
      throw new Error(
        data.message || `Delete failed. Status: ${response.status}`
      );
    }

    setInvoices(prev =>
      prev.filter(invoice =>
        String(invoice._id || invoice.id) !== String(invoiceIdentifier)
      )
    );

    alert('Invoice deleted successfully.');

  } catch (error) {
    console.error('Error deleting invoice:', error);
    alert(error.message);
  }
};


const handleExportInvoiceReport = () => {

  if (!invoices || invoices.length === 0) {
    alert('No invoices available to generate report.');
    return;
  }

  // SHEET 1: INVOICE SUMMARY

  const invoiceSummary = invoices.map((inv, index) => {

    const {
      lumSum,
      gstAmount,
      finalAmount
    } = calculateInvoiceTotals(inv);

    return {
      'Sr. No.': index + 1,
      'Invoice Number': inv.id || '',
      'Invoice Date': inv.date || '',
      'Client Name': inv.billFrom?.name || '',
      'Client GSTIN': inv.billFrom?.gstin || '',
      'Billing Type': inv.isGst ? 'GST' : 'Non-GST',
      'GST Rate (%)': inv.isGst ? Number(inv.gstRate) || 0 : 0,
      'Site Location': inv.siteLocation || '',
      'Total Items': Array.isArray(inv.items) ? inv.items.length : 0,
      'Taxable Amount': Number(lumSum.toFixed(2)),
      'GST Amount': Number(gstAmount.toFixed(2)),
      'Final Amount': Number(finalAmount.toFixed(2))
    };

  });


  // SHEET 2: INVOICE ITEM DETAILS

  const itemDetails = [];

  invoices.forEach(inv => {

    const invoiceItems = Array.isArray(inv.items)
      ? inv.items
      : [];

    invoiceItems.forEach((item, index) => {

      itemDetails.push({

        'Invoice Number': inv.id || '',
        'Invoice Date': inv.date || '',
        'Client Name': inv.billFrom?.name || '',
        'Site Location': inv.siteLocation || '',

        'Sr. No.': index + 1,
        'Description': item.description || '',
        'Unit': item.unit || '',
        'Quantity': Number(item.qty) || 0,
        'Rate': Number(item.rate) || 0,
        'Discount (%)': Number(item.discount) || 0,

        'Amount': Number(
          getItemAmount(item).toFixed(2)
        )

      });

    });

  });


  // CREATE EXCEL WORKBOOK

  const workbook = XLSX.utils.book_new();


  // SUMMARY SHEET

  const summarySheet = XLSX.utils.json_to_sheet(invoiceSummary);

  summarySheet['!cols'] = [
    { wch: 10 },
    { wch: 20 },
    { wch: 15 },
    { wch: 25 },
    { wch: 20 },
    { wch: 15 },
    { wch: 15 },
    { wch: 30 },
    { wch: 12 },
    { wch: 18 },
    { wch: 18 },
    { wch: 18 }
  ];

  XLSX.utils.book_append_sheet(
    workbook,
    summarySheet,
    'Invoice Summary'
  );


  // ITEM DETAILS SHEET

  const itemSheet = XLSX.utils.json_to_sheet(itemDetails);

  itemSheet['!cols'] = [
    { wch: 20 },
    { wch: 15 },
    { wch: 25 },
    { wch: 30 },
    { wch: 10 },
    { wch: 35 },
    { wch: 12 },
    { wch: 12 },
    { wch: 15 },
    { wch: 15 },
    { wch: 18 }
  ];

  XLSX.utils.book_append_sheet(
    workbook,
    itemSheet,
    'Invoice Item Details'
  );


  // DOWNLOAD EXCEL FILE

  const fileName = `NextGen_Invoice_Report_${new Date()
    .toISOString()
    .slice(0, 10)}.xlsx`;

  XLSX.writeFile(workbook, fileName);

};

const handlePrint = () => {
    window.print();
  };

  const formatCurrency = (amount) =>
    `₹${(Number(amount) || 0).toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;

  return (
    <div className="billing-theme">

      <style>{`

        .billing-theme {
          --bill-dark: #15110e;
          --bill-card: #211b17;
          --bill-bronze: #a45e30;
          --bill-bronze-light: #c58b60;
          --bill-beige: #e8c29f;
          --bill-bg: #f5f1eb;
          --bill-border: #e7ded3;
          --bill-muted: #93877c;
          --bill-text: #29211b;
          min-height: 100%;
          background: var(--bill-bg);
          color: var(--bill-text);
          padding: 30px;
          font-family: inherit;
        }

        .bill-page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 28px;
        }

        .bill-eyebrow {
          color: var(--bill-bronze);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 7px;
        }

        .bill-page-title {
          font-size: 26px;
          font-weight: 800;
          color: var(--bill-dark);
          letter-spacing: -0.7px;
          margin: 0;
        }

        .bill-page-subtitle {
          color: var(--bill-muted);
          font-size: 13px;
          margin-top: 6px;
        }

        .bill-primary-btn {
          background: var(--bill-dark);
          color: var(--bill-beige);
          border: 1px solid var(--bill-bronze);
          padding: 12px 19px;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: .25s;
        }

        .bill-primary-btn:hover {
          background: var(--bill-bronze);
          color: white;
          transform: translateY(-2px);
        }

        .bill-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 17px;
          margin-bottom: 25px;
        }

        .bill-stat-card {
          background: white;
          border: 1px solid var(--bill-border);
          border-radius: 15px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          box-shadow: 0 3px 12px rgba(40, 25, 12, .025);
        }

        .bill-stat-icon {
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f4e9dc;
          color: var(--bill-bronze);
          border-radius: 12px;
          flex-shrink: 0;
        }

        .bill-stat-label {
          color: var(--bill-muted);
          font-size: 11px;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .bill-stat-value {
          font-size: 21px;
          font-weight: 800;
          color: var(--bill-dark);
          margin: 0;
        }

        .bill-table-card {
          background: white;
          border: 1px solid var(--bill-border);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 18px rgba(40, 25, 12, .035);
        }

        .bill-table-heading {
          padding: 19px 22px;
          border-bottom: 1px solid var(--bill-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .bill-table-heading h3 {
          font-size: 14px;
          font-weight: 800;
          color: var(--bill-dark);
          margin: 0;
        }

        .bill-table-heading p {
          font-size: 11px;
          color: var(--bill-muted);
          margin: 5px 0 0;
        }

        .bill-table-wrap {
          width: 100%;
          overflow-x: auto;
        }

        .bill-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 700px;
          text-align: left;
        }

        .bill-table thead {
          background: #f8f5f0;
        }

        .bill-table th {
          color: #89796b;
          padding: 15px 18px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .8px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .bill-table td {
          padding: 16px 18px;
          font-size: 12px;
          border-top: 1px solid #f0ebe5;
          white-space: nowrap;
        }

        .bill-table tbody tr:hover {
          background: #fcfaf7;
        }

        .bill-invoice-id {
          font-weight: 800;
          color: var(--bill-bronze);
        }

        .bill-client-name {
          font-weight: 700;
          color: var(--bill-dark);
        }

        .bill-type {
          padding: 6px 10px;
          display: inline-flex;
          border-radius: 6px;
          font-size: 10px;
          font-weight: 800;
        }

        .bill-type-gst {
          color: #527b53;
          background: #edf4e9;
        }

        .bill-type-non {
          color: #987044;
          background: #f7efe1;
        }

        .bill-view-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: #f3e6d8;
          color: #92532e;
          border: 1px solid #ead6c1;
          border-radius: 7px;
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
          transition: .2s;
        }

        .bill-view-btn:hover {
          background: var(--bill-bronze);
          color: white;
        }

        .bill-empty {
          text-align: center;
          padding: 55px 20px;
          color: var(--bill-muted);
        }

        .bill-empty-icon {
          width: 65px;
          height: 65px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto 15px;
          border-radius: 18px;
          background: #f4e9dc;
          color: var(--bill-bronze);
        }

        .bill-empty h3 {
          color: var(--bill-dark);
          font-size: 15px;
          margin-bottom: 7px;
        }

        .bill-empty p {
          font-size: 12px;
        }

        /* MODAL */

        .bill-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 999;
          background: rgba(21, 17, 14, .72);
          backdrop-filter: blur(5px);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .bill-modal {
          width: 100%;
          max-width: 850px;
          max-height: 92vh;
          overflow-y: auto;
          background: #fdfbf8;
          border: 1px solid #bd936f;
          border-radius: 17px;
          box-shadow: 0 25px 80px rgba(0,0,0,.3);
        }

        .bill-modal-header {
          background: var(--bill-dark);
          color: var(--bill-beige);
          padding: 19px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 5;
        }

        .bill-modal-header h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 800;
        }

        .bill-modal-header p {
          margin: 4px 0 0;
          color: #b7a493;
          font-size: 11px;
        }

        .bill-close-btn {
          border: 1px solid #66503e;
          color: #e8c29f;
          background: #30241c;
          border-radius: 8px;
          padding: 7px;
          display: flex;
          cursor: pointer;
        }

        .bill-form {
          padding: 24px;
        }

        .bill-section {
          margin-bottom: 23px;
        }

        .bill-section-title {
          font-size: 11px;
          font-weight: 800;
          color: var(--bill-bronze);
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-bottom: 13px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .bill-gst-box {
          background: #f4ece2;
          border: 1px solid #e6d3bf;
          border-radius: 11px;
          padding: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
        }

        .bill-radio-group {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .bill-radio-group label {
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 7px;
          cursor: pointer;
        }

        .bill-radio-group input {
          accent-color: var(--bill-bronze);
        }

        .bill-form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .bill-field label {
          display: block;
          color: #716457;
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 7px;
        }

        .bill-field input,
        .bill-field select {
          width: 100%;
          min-width: 0;
          background: white;
          border: 1px solid #e3d9ce;
          border-radius: 8px;
          padding: 11px 12px;
          font-size: 12px;
          color: var(--bill-dark);
          outline: none;
          transition: .2s;
        }

        .bill-field input:focus,
        .bill-field select:focus {
          border-color: var(--bill-bronze);
          box-shadow: 0 0 0 3px rgba(164,94,48,.1);
        }

        .bill-items-container {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .bill-item-card {
          background: white;
          border: 1px solid #e9dfd4;
          border-radius: 11px;
          padding: 13px;
        }

        .bill-item-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .bill-item-number {
          color: var(--bill-bronze);
          font-size: 11px;
          font-weight: 900;
        }

        .bill-delete-btn {
          color: #b15a4a;
          background: #fbefed;
          border: 0;
          border-radius: 7px;
          padding: 7px;
          display: flex;
          cursor: pointer;
        }

        .bill-item-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 10px;
        }

        .bill-line-total {
          margin-top: 11px;
          text-align: right;
          color: var(--bill-bronze);
          font-size: 12px;
          font-weight: 800;
        }

        .bill-add-item {
          background: transparent;
          color: var(--bill-bronze);
          border: 1px dashed #c99d77;
          padding: 11px;
          width: 100%;
          border-radius: 9px;
          font-size: 11px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          cursor: pointer;
        }

        .bill-add-item:hover {
          background: #f8efe5;
        }

        .bill-total-box {
          background: var(--bill-dark);
          color: white;
          border-radius: 12px;
          padding: 19px;
        }

        .bill-total-row {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          font-size: 12px;
          color: #d3c2b2;
          margin-bottom: 12px;
        }

        .bill-total-final {
          border-top: 1px solid #554336;
          padding-top: 13px;
          margin-top: 5px;
          margin-bottom: 0;
          color: var(--bill-beige);
          font-size: 16px;
          font-weight: 900;
        }

        .bill-modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          padding-top: 19px;
          border-top: 1px solid #e9dfd4;
        }

        .bill-cancel-btn {
          background: white;
          color: #796b5d;
          border: 1px solid #ddd1c4;
          padding: 11px 17px;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
        }

        /* INVOICE PREVIEW */

        .bill-preview-page {
          background: #eae3d9;
          min-height: 100vh;
          padding: 25px;
        }

        .bill-preview-toolbar {
          max-width: 850px;
          margin: 0 auto 20px;
          display: flex;
          justify-content: space-between;
          gap: 12px;
        }

        .bill-back-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #d4c5b5;
          background: white;
          color: var(--bill-dark);
          padding: 10px 15px;
          border-radius: 9px;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
        }

        .bill-print-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid var(--bill-bronze);
          background: var(--bill-dark);
          color: var(--bill-beige);
          padding: 10px 17px;
          border-radius: 9px;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
        }

        .bill-paper {
          max-width: 850px;
          margin: auto;
          background: white;
          padding: 35px;
          color: #171717;
          box-shadow: 0 8px 30px rgba(0,0,0,.12);
          font-family: Arial, sans-serif;
          font-size: 12px;
        }

        .bill-paper table {
          width: 100%;
          border-collapse: collapse;
        }

        .bill-paper td,
        .bill-paper th {
          border: 1px solid #555;
          padding: 9px;
        }

        .bill-paper .paper-heading {
          background: #211b17;
          color: #e8c29f;
          font-weight: 800;
          text-transform: uppercase;
        }

        .bill-paper .paper-company {
          font-size: 17px;
          font-weight: 900;
          color: #211b17;
        }

        .bill-paper .paper-title {
          font-size: 22px;
          letter-spacing: 2px;
          text-align: center;
          font-weight: 900;
          color: #a45e30;
        }

        .bill-paper .paper-logo {
          width: 75px;
          height: 75px;
          object-fit: contain;
        }

        .bill-paper .paper-empty-row td {
          height: 9mm;
          min-height: 9mm;
          padding: 0 5px;
        }

        .bill-paper .paper-total {
          background: #f3e8dc;
          font-weight: 900;
        }

        .bill-paper .paper-final {
          background: #211b17;
          color: #e8c29f;
          font-size: 15px;
          font-weight: 900;
        }

        .bill-paper .paper-total td,
        .bill-paper .paper-final td {
          padding: 8px 9px;
          box-sizing: border-box;
        }

        .bill-paper .paper-total td:first-child,
        .bill-paper .paper-final td:first-child {
          text-align: right;
        }

        .bill-paper .paper-total td:last-child,
        .bill-paper .paper-final td:last-child {
          white-space: nowrap;
        }

        @media(max-width: 900px) {
          .billing-theme {
            padding: 22px;
          }

          .bill-item-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .bill-item-description {
            grid-column: span 3;
          }
        }

        @media(max-width: 600px) {
          .billing-theme {
            padding: 15px;
          }

          .bill-page-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .bill-page-title {
            font-size: 22px;
          }

          .bill-primary-btn {
            width: 100%;
          }

          .bill-stats-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .bill-stat-card {
            padding: 15px;
          }

          .bill-form-grid {
            grid-template-columns: 1fr;
          }

          .bill-form {
            padding: 16px;
          }

          .bill-modal-overlay {
            padding: 8px;
          }

          .bill-modal {
            max-height: 95vh;
          }

          .bill-item-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .bill-item-description {
            grid-column: span 2;
          }

        
.bill-preview-page {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  padding: 8px;
  box-sizing: border-box;
  overflow-x: hidden;
}

.bill-paper {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  margin: 0 auto;
  padding: 8px;
  box-sizing: border-box;
  font-size: 8px;
  overflow-x: hidden;
}

.bill-paper table {
  width: 100%;
  max-width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
}

.bill-paper td,
.bill-paper th {
  padding: 4px 3px;
  font-size: 8px;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.bill-paper .paper-logo {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}

.bill-paper .paper-company {
  font-size: 10px;
  overflow-wrap: anywhere;
}

.bill-paper .paper-title {
  font-size: 12px;
  letter-spacing: 0;
  padding: 4px;
}

.bill-paper .paper-items-table {
  table-layout: fixed;
  font-size: 7px;
}

.bill-paper .paper-items-table th,
.bill-paper .paper-items-table td {
  padding: 4px 2px;
  font-size: 7px;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.bill-paper .paper-total td,
.bill-paper .paper-final td {
  padding: 5px 3px;
  font-size: 8px;
}

.bill-paper .paper-final {
  font-size: 10px;
}

.bill-preview-toolbar {
  width: 100%;
  max-width: 100%;
  gap: 7px;
  flex-wrap: wrap;
}


          .bill-preview-toolbar {
            flex-wrap: wrap;
          }

          .bill-back-btn,
          .bill-print-btn {
            flex: 1;
            justify-content: center;
          }

          .bill-modal-footer {
            flex-wrap: wrap;
          }
        }

        @media print {
    @page {
        size: A4 portrait;
        margin: 0;
    }

    html,
    body,
    #root {
        width: 100% !important;
        min-height: 0 !important;
        height: auto !important;
        margin: 0 !important;
        padding: 0 !important;
        background: #ffffff !important;
        overflow: visible !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
    }

    /* Hide everything except the invoice */
    body * {
        visibility: hidden !important;
    }

    #printable-invoice,
    #printable-invoice * {
        visibility: visible !important;
    }

    /* Remove preview background and outer spacing */
    .billing-theme,
    .bill-preview-page {
        display: block !important;
        position: static !important;
        width: 100% !important;
        min-height: 0 !important;
        height: auto !important;
        margin: 0 !important;
        padding: 0 !important;
        background: #ffffff !important;
        overflow: visible !important;
    }

    /* Hide only the preview buttons */
    .bill-preview-toolbar,
    .no-print {
        display: none !important;
    }

    /* Preserve the same invoice design as View Invoice */
    #printable-invoice {
        display: block !important;
        position: relative !important;
        width: 100% !important;
        max-width: 850px !important;
        min-height: 0 !important;
        height: auto !important;
        margin: 0 auto !important;
        padding: 35px !important;
        box-sizing: border-box !important;
        background: #ffffff !important;
        color: #171717 !important;
        box-shadow: none !important;
        border: none !important;
        font-family: Arial, sans-serif !important;
        font-size: 12px !important;
        overflow: visible !important;
    }

    /* Preserve original table appearance */
    #printable-invoice table {
        width: 100% !important;
        border-collapse: collapse !important;
    }

    #printable-invoice td,
    #printable-invoice th {
        border: 1px solid #555 !important;
        padding: 9px !important;
        font-size: inherit !important;
        line-height: normal !important;
    }

    /* Preserve original logo size */
    #printable-invoice .paper-logo {
        width: 75px !important;
        height: 75px !important;
        object-fit: contain !important;
    }

    /* Preserve original company and invoice title */
    #printable-invoice .paper-company {
        font-size: 17px !important;
    }

    #printable-invoice .paper-title {
        font-size: 22px !important;
        letter-spacing: 2px !important;
    }

    /* Preserve original colours */
    #printable-invoice .paper-heading {
        background: #211b17 !important;
        color: #e8c29f !important;
    }

    #printable-invoice .paper-total {
        background: #f3e8dc !important;
    }

    #printable-invoice .paper-final {
        background: #211b17 !important;
        color: #e8c29f !important;
        font-size: 15px !important;
    }

    #printable-invoice .paper-total td,
    #printable-invoice .paper-final td {
        padding: 8px 9px !important;
    }

    #printable-invoice tr {
        break-inside: avoid !important;
        page-break-inside: avoid !important;
    }

   /* Keep signature on the first page */
#printable-invoice tr.paper-signature {
    break-inside: auto !important;
    page-break-inside: auto !important;
}

#printable-invoice tr.paper-signature td {
    padding: 8px 12px !important;
}

    /* Slightly reduce vertical spacing so the signature fits on page 1 */
    #printable-invoice {
        padding-top: 20px !important;
        padding-bottom: 20px !important;
    }

    #printable-invoice td,
    #printable-invoice th {
        padding-top: 6px !important;
        padding-bottom: 6px !important;
    }
}

      `}
      </style>

    {selectedInvoice ? (

        /* INVOICE PREVIEW */

        <div className="bill-preview-page">

          <div className="bill-preview-toolbar no-print">

            <button
              onClick={() => setSelectedInvoice(null)}
              className="bill-back-btn"
            >
              <ArrowLeft size={16} />
              {t("cancel") || "Back to invoices"}
            </button>

            <button
              onClick={handlePrint}
              className="bill-print-btn"
            >
              <Printer size={16} />
              {t("printSavePdf")}
            </button>

          </div>

          <div
            id="printable-invoice"
            className="bill-paper"
          >

            <table>
              <tbody>

                <tr>
                  <td width="55%">
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '13px'
                    }}>
                      <img
                        src="/logo.png"
                        alt="NextGen Logo"
                        className="paper-logo"
                      />

                      <div>
                        <div className="paper-company">
                          {selectedInvoice.company?.name}
                        </div>

                        {selectedInvoice.isGst && (
                          <p>
                            GSTIN: {selectedInvoice.company?.gstin}
                          </p>
                        )}
                      </div>
                    </div>
                  </td>

                  <td className="paper-title">
                    {selectedInvoice.isGst
                      ? 'TAX INVOICE'
                      : 'INVOICE'}
                  </td>
                </tr>

                <tr>
                  <td>
                    <strong>{selectedInvoice.company?.name}</strong>
                    <p>{selectedInvoice.company?.address}</p>

                    {selectedInvoice.isGst && (
                      <p>
                        GSTIN: {selectedInvoice.company?.gstin}
                      </p>
                    )}
                  </td>

                  <td style={{ padding: 0 }}>
                    <table>
                      <tbody>
                        <tr>
                          <td><strong>Date</strong></td>
                          <td>{selectedInvoice.date}</td>
                        </tr>

                        <tr>
                          <td><strong>Invoice No</strong></td>
                          <td>{selectedInvoice.id}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="paper-heading">
                    BILL FROM
                  </td>
                </tr>

                <tr>
                  <td colSpan="2">
                    <strong>{selectedInvoice.billFrom?.name}</strong>

                    {selectedInvoice.isGst &&
                      selectedInvoice.billFrom?.gstin && (
                        <p>
                          GSTIN: {selectedInvoice.billFrom.gstin}
                        </p>
                      )}
                  </td>
                </tr>

                <tr>
                  <td colSpan="2">
                    <strong>SITE LOCATION: </strong>
                    {selectedInvoice.siteLocation}
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" style={{ padding: 0 }}>
                    <table className="paper-items-table" style={{ textAlign: 'center' }}>
                      <thead className="paper-heading">
                        <tr>
                          <th>SN</th>
                          <th>Description</th>
                          <th>Unit</th>
                          <th>QTY</th>
                          <th>Discount</th>
                          <th>Rate</th>
                          <th>Amount</th>
                        </tr>
                      </thead>

                      <tbody>
                        {(Array.isArray(selectedInvoice.items)
                          ? selectedInvoice.items
                          : []
                        ).map((item, idx) => (
                          <tr key={`invoice-item-${idx}`}>
                            <td>{idx + 1}</td>
                            <td style={{ textAlign: 'left' }}>
                              {item.description || ''}
                            </td>
                            <td>{item.unit || ''}</td>
                            <td>{item.qty ?? ''}</td>
                            <td>
                              {item.discount
                                ? `${item.discount}%`
                                : ''}
                            </td>
                            <td>{formatCurrency(item.rate)}</td>
                            <td>{formatCurrency(getItemAmount(item))}</td>
                          </tr>
                        ))}

                        {Array.from({
                          length: Math.max(
                            0,
                            10 - (Array.isArray(selectedInvoice.items)
                              ? selectedInvoice.items.length
                              : 0)
                          )
                        }).map((_, idx) => (
                          <tr className="paper-empty-row" key={`empty-item-${idx}`}>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                          </tr>
                        ))}

                      </tbody>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" style={{ padding: 0 }}>
                    {(() => {
                      const {
                        lumSum,
                        gstAmount,
                        finalAmount
                      } = calculateInvoiceTotals(selectedInvoice);

                      return (
                        <table
                          style={{
                            width: '100%',
                            tableLayout: 'fixed',
                            borderCollapse: 'collapse'
                          }}
                        >
                          <tbody>
                            <tr className="paper-total">
                              <td style={{ width: '85%', textAlign: 'right' }}>
                                LUMSUM AMOUNT
                              </td>
                              <td style={{ width: '15%', whiteSpace: 'nowrap' }}>
                                {formatCurrency(lumSum)}
                              </td>
                            </tr>

                            {selectedInvoice.isGst && (
                              <tr className="paper-total">
                                <td style={{ textAlign: 'right' }}>
                                  GST ({selectedInvoice.gstRate}%)
                                </td>
                                <td style={{ whiteSpace: 'nowrap' }}>
                                  {formatCurrency(gstAmount)}
                                </td>
                              </tr>
                            )}

                            <tr className="paper-final">
                              <td style={{ textAlign: 'right' }}>
                                {t("finalAmount")}
                              </td>
                              <td style={{ whiteSpace: 'nowrap' }}>
                                {formatCurrency(finalAmount)}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      );
                    })()}
                  </td>
                </tr>

                <tr className="paper-heading">
                  <td colSpan="2" style={{ textAlign: 'center' }}>
                    BANK DETAILS
                  </td>
                </tr>

                <tr>
                  <td><strong>Bank Name</strong></td>
                  <td>{selectedInvoice.company?.bankName}</td>
                </tr>

                <tr>
                  <td><strong>Account No.</strong></td>
                  <td>{selectedInvoice.company?.accountNo}</td>
                </tr>

                <tr>
                  <td><strong>IFSC CODE</strong></td>
                  <td>{selectedInvoice.company?.ifsc}</td>
                </tr>

                <tr className="paper-signature">
                  <td colSpan="2" style={{ padding: '24px 12px 10px' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontWeight: 700
                    }}>
                      <span>
                        For {selectedInvoice.company?.name}
                      </span>
                      <span>Authorized Signatory</span>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>

          </div>
        </div>

      ) : (

        /* BILLING DASHBOARD */

        <div>

          <div className="bill-page-header">

            <div>
              <div className="bill-eyebrow">
                NEXTGEN / FINANCIAL MANAGEMENT
              </div>

              <h2 className="bill-page-title">
                {t("invoicesTitle")}
              </h2>

              <p className="bill-page-subtitle">
                {t("invoicesSub")}
              </p>
            </div>

            <div style={{
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  flexWrap: 'wrap'
}}>

  {/* EXPORT INVOICE REPORT */}

  <button
    type="button"
    onClick={handleExportInvoiceReport}
    className="bill-primary-btn"
    style={{
      background: '#ffffff',
      color: '#92532e',
      border: '1px solid #c58b60'
    }}
  >
    <FileSpreadsheet size={17} />
    Export Report
  </button>


  {/* CREATE NEW INVOICE */}

  <button
    onClick={() => setShowCreateModal(true)}
    className="bill-primary-btn"
  >
    <Plus size={17} />
    {t("createNewInvoice")}
  </button>

</div>

          </div>

          {/* STATISTICS */}

          <div className="bill-stats-grid">

           <div className="bill-stat-card">
              <div className="bill-stat-icon">
                <Receipt size={22} />
              </div>

              <div>
                <div className="bill-stat-label">
                  {t("totalInvoices")}
                </div>
                <h3 className="bill-stat-value">
                  {invoices.length}
                </h3>
              </div>
            </div>

            <div className="bill-stat-card">
              <div className="bill-stat-icon">
                <IndianRupee size={22} />
              </div>

              <div>
                <div className="bill-stat-label">
                  {t("totalBilling")}
                </div>
                <h3 className="bill-stat-value">
                  {formatCurrency(
                    invoices.reduce(
                      (sum, inv) =>
                        sum + calculateInvoiceTotals(inv).finalAmount,
                      0
                    )
                  )}
                </h3>
              </div>
            </div>

            <div className="bill-stat-card">
              <div className="bill-stat-icon">
                <Percent size={22} />
              </div>

              <div>
                <div className="bill-stat-label">
                  {t("gstInvoices")}
                </div>
                <h3 className="bill-stat-value">
                  {invoices.filter(inv => inv.isGst).length}
                </h3>
              </div>
            </div>

          </div>

          {/* INVOICE TABLE */}

          <div className="bill-table-card">

            <div className="bill-table-heading">
              <div>
                <h3>{t("invoiceRecords")}</h3>
                <p>{t("allGeneratedInvoices")}</p>
              </div>

              <FileText
                size={21}
                color="#a45e30"
              />
            </div>

            <div className="bill-table-wrap">

              <table className="bill-table">

                <thead>
                  <tr>
                   <th>{t("invoiceNo")}</th>
                    <th>{t("clientName")}</th>
                    <th>{t("billingType")}</th>
                    <th>{t("date")}</th>
                    <th>{t("finalAmount")}</th>
                    <th style={{ textAlign: 'right' }}>{t("action")}</th>
                  </tr>
                </thead>

                <tbody>

                  {loading ? (

                    <tr>
                      <td colSpan="6" className="bill-empty">
                        {t("loadingInvoices")}
                      </td>
                    </tr>

                  ) : invoices.length === 0 ? (

                    <tr>
                      <td colSpan="6">

                        <div className="bill-empty">
                          <div className="bill-empty-icon">
                            <Receipt size={29} />
                          </div>

                          <h3>{t("noInvoicesYet")}</h3>

                          <p>
                            {t("createFirstInvoice")}
                          </p>
                        </div>

                      </td>
                    </tr>
                  ) : (

                    invoices.map((inv, index) => {
                      const { finalAmount } =
                        calculateInvoiceTotals(inv);

                      return (
                        <tr key={inv._id || inv.id || index}>

                          <td className="bill-invoice-id">
                            {inv.id}
                          </td>

                          <td className="bill-client-name">
                            {inv.billFrom?.name || 'Client'}
                          </td>

                          <td>
                            <span className={
                              `bill-type ${
                                inv.isGst
                                  ? 'bill-type-gst'
                                  : 'bill-type-non'
                              }`
                            }>
                              {inv.isGst
                                ? `GST (${inv.gstRate}%)`
                                : 'Non-GST'}
                            </span>
                          </td>

                          <td>{inv.date}</td>

                          <td style={{
                            fontWeight: 900,
                            color: '#211b17'
                          }}>
                            {formatCurrency(finalAmount)}
                          </td>

                        <td style={{
  textAlign: 'right',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '8px'
}}>
  <button
    onClick={() => setSelectedInvoice(inv)}
    className="bill-view-btn"
  >
    <Eye size={14} />
    {t("viewPdf")}
  </button>

  <button
    type="button"
    onClick={() => handleDeleteInvoice(inv)}
    className="bill-delete-btn"
    title="Delete Invoice"
    style={{
      padding: '8px 10px',
      border: '1px solid #f0c9c4',
      borderRadius: '7px',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Trash2 size={15} />
  </button>
</td>

                        </tr>
                      );
                    })

                  )}

                </tbody>
              </table>

            </div>
          </div>

        </div>
      )}

      {/* CREATE INVOICE MODAL */}

      {showCreateModal && (

        <div
          className="bill-modal-overlay"
          onClick={() => setShowCreateModal(false)}
        >

          <div
            className="bill-modal"
            onClick={e => e.stopPropagation()}
          >

            <div className="bill-modal-header">

              <div>
                <h3>{t("createNewInvoice")}</h3>
                <p>Generate a professional project invoice</p>
              </div>

              <button
                onClick={() => setShowCreateModal(false)}
                className="bill-close-btn"
              >
                <X size={19} />
              </button>

            </div>

            <form
              onSubmit={handleCreateInvoice}
              className="bill-form"
            >

              {/* BILLING TYPE */}

              <div className="bill-section">

                <div className="bill-section-title">
                  <Receipt size={15} />
                  Billing Configuration
                </div>

                <div className="bill-gst-box">

                  <div className="bill-radio-group">

                    <label>
                      <input
                        type="radio"
                        name="gstOption"
                        checked={isGst}
                        onChange={() => setIsGst(true)}
                      />
                      {t("withGst")}
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="gstOption"
                        checked={!isGst}
                        onChange={() => setIsGst(false)}
                      />
                      {t("withoutGst")}
                    </label>

                  </div>

                  {isGst && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 9
                    }}>
                      <label style={{
                        fontSize: 11,
                        fontWeight: 800
                      }}>
                        {t("gstRate")}
                      </label>

                      <input
                        type="number"
                        min="0"
                        max="100"
                        step="any"
                        value={gstRate}
                        onChange={e =>
                          setGstRate(e.target.value === ''
                            ? ''
                            : Number(e.target.value))
                        }
                        style={{
                          width: 75,
                          padding: 8,
                          border: '1px solid #dfc8b1',
                          borderRadius: 7,
                          outline: 'none'
                        }}
                      />

                      <span style={{ fontSize: 12 }}>%</span>
                    </div>
                  )}

                </div>

              </div>

              {/* CLIENT DETAILS */}

              <div className="bill-section">

                <div className="bill-section-title">
                  <Building2 size={15} />
                  Client Information
                </div>

                <div className="bill-form-grid">

                  <div className="bill-field">
                    <label>{t("clientName")} *</label>

                    <input
                      type="text"
                      required
                      placeholder="Enter client name"
                      value={clientName}
                      onChange={e => setClientName(e.target.value)}
                    />
                  </div>

                  {isGst && (
                    <div className="bill-field">
                      <label>Client GSTIN</label>

                      <input
                        type="text"
                        placeholder="Enter GSTIN"
                        value={clientGstin}
                        onChange={e => setClientGstin(e.target.value)}
                      />
                    </div>
                  )}

                </div>

                <div
                  className="bill-field"
                  style={{ marginTop: 15 }}
                >
                  <label>{t("siteLocation")}</label>

                  <input
                    type="text"
                    placeholder="Enter project/site location"
                    value={siteLocation}
                    onChange={e => setSiteLocation(e.target.value)}
                  />
                </div>

              </div>

              {/* ITEM DETAILS */}

              {/* ITEM DETAILS */}

              <div className="bill-section">

                <div className="bill-section-title">
                  <FileText size={15} />
                  {t("itemsWorkDetails")}
                </div>

                <div className="bill-items-container">

                  {items.map((item, idx) => (

                    <div
                      className="bill-item-card"
                      key={idx}
                    >

                      <div className="bill-item-top">

                        <span className="bill-item-number">
                          {t("itemNum")} #{idx + 1}
                        </span>

                        <button
                          type="button"
                          onClick={() => handleRemoveItem(idx)}
                          className="bill-delete-btn"
                          disabled={items.length === 1}
                        >
                          <Trash2 size={15} />
                        </button>

                      </div>

                      <div className="bill-item-grid">

                        <div className="bill-field bill-item-description">
                          <label>{t("description")} *</label>

                          <input
                            type="text"
                            placeholder={t("workDescriptionPlaceholder")}
                            required
                            value={item.description}
                            onChange={e =>
                              handleItemChange(
                                idx,
                                'description',
                                e.target.value
                              )
                            }
                          />
                        </div>

                        <div className="bill-field">
                          <label>{t("unit")}</label>

                          <select
                            value={item.unit}
                            onChange={e =>
                              handleItemChange(
                                idx,
                                'unit',
                                e.target.value
                              )
                            }
                          >
                            {unitOptions.map(u => (
                              <option key={u} value={u}>
                                {u}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="bill-field">
                          <label>{t("quantity")}</label>

                          <input
                            type="number"
                            min="0"
                            step="any"
                            value={item.qty}
                            onChange={e =>
                              handleItemChange(
                                idx,
                                'qty',
                                e.target.value
                              )
                            }
                          />
                        </div>

                        <div className="bill-field">
                          <label>{t("rateLabel")}</label>

                          <input
                            type="number"
                            min="0"
                            step="any"
                            value={item.rate}
                            onChange={e =>
                              handleItemChange(
                                idx,
                                'rate',
                                e.target.value
                              )
                            }
                          />
                        </div>

                        <div className="bill-field">
                          <label>{t("discountPercent")}</label>

                          <input
                            type="number"
                            min="0"
                            max="100"
                            step="any"
                            value={item.discount}
                            onChange={e =>
                              handleItemChange(
                                idx,
                                'discount',
                                e.target.value
                              )
                            }
                          />
                        </div>

                      </div>

                      <div className="bill-line-total">
                        {t("lineAmount")}: {formatCurrency(getItemAmount(item))}
                      </div>

                    </div>

                  ))}

                </div>

                <button
                  type="button"
                  onClick={handleAddItem}
                  className="bill-add-item"
                  style={{ marginTop: 12 }}
                >
                  <Plus size={15} />
                  {t("addAnotherItem")}
                </button>

              </div>

              {/* TOTALS */}

              <div className="bill-section">

                <div className="bill-section-title">
                  <IndianRupee size={15} />
                  {t("invoiceSummary")}
                </div>

                <div className="bill-total-box">

                  <div className="bill-total-row">
                    <span>{t("lumsumAmount")}</span>
                    <strong>{formatCurrency(formLumsum)}</strong>
                  </div>

                  {isGst && (
                    <div className="bill-total-row">
                      <span>GST ({gstRate || 0}%)</span>
                      <strong>{formatCurrency(formGstAmount)}</strong>
                    </div>
                  )}

                  <div className="bill-total-row bill-total-final">
                    <span>{t("finalAmount")}</span>
                    <strong>{formatCurrency(formFinalAmount)}</strong>
                  </div>

                </div>

              </div>
              {/* FOOTER */}

              <div className="bill-modal-footer">

                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="bill-cancel-btn"
                >
                  {t("cancel")}
                </button>

                <button
                  type="submit"
                  className="bill-primary-btn"
                >
                  <CheckCircle2 size={16} />
                  {t("saveGenerate")}
                </button>

              </div>

            </form>

          </div>
        </div>

      )}

    </div>
  );
}