
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import {
    Plus,
    Printer,
    ArrowLeft,
    Eye,
    X,
    Trash2,
    FileText,
    Receipt,
    Calculator,
    Building2,
    MapPin,
    CalendarDays,
    BriefcaseBusiness,
    Download,
    Search,
    HardHat,
    CheckCircle2
} from 'lucide-react';

export default function QuotationPage() {

    const { t } = useLanguage();

    const [selectedQuotation, setSelectedQuotation] = useState(null);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [quotations, setQuotations] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    const unitOptions = [
        'Sq. ft.',
        'Cu. mtr.',
        'R. mtr.',
        'Bags',
        'Nos',
        'Hours',
        'Days',
        'L.S.'
    ];

    const [isGst, setIsGst] = useState(true);
    const [gstRate, setGstRate] = useState(18);
    const [clientName, setClientName] = useState('');
    const [siteLocation, setSiteLocation] = useState('');
    const [layoutDetails, setLayoutDetails] = useState('Civil Work (as per discussion)');
    const [contractorName, setContractorName] = useState('AV TECH Baramati');
    const [projectName, setProjectName] = useState('');

    const [items, setItems] = useState([
        {
            sn: 1,
            description: '',
            unit: 'Sq. ft.',
            qty: 1,
            discount: 0,
            rate: 0
        }
    ]);

    // FETCH QUOTATIONS FROM MONGODB
    useEffect(() => {
        fetchQuotations();
    }, []);

    const fetchQuotations = async () => {
        try {
            const response = await fetch(
                'http://localhost:5000/api/quotations'
            );

            if (!response.ok) {
                throw new Error('Failed to fetch quotations');
            }

            const data = await response.json();

            const safeQuotations = Array.isArray(data)
                ? data.map(qt => ({
                    ...qt,
                    items: Array.isArray(qt.items) ? qt.items : [],
                    notes: Array.isArray(qt.notes) ? qt.notes : [],
                    company: qt.company || {},
                    isGst: Boolean(qt.isGst)
                }))
                : [];

            setQuotations(safeQuotations);

            return safeQuotations;

        } catch (error) {
            console.error('Error fetching quotations:', error);
            return null;
        }
    };

    // PRINT QUOTATION
    const handlePrint = () => {
        window.print();
    };

    // CALCULATE TOTALS
    const calculateTotals = (qt) => {

        const safeItems = Array.isArray(qt?.items)
            ? qt.items
            : [];

        const total = safeItems.reduce((acc, item) => {

            const discountedRate =
                Number(item.rate || 0) *
                (1 - Number(item.discount || 0) / 100);

            return acc +
                (Number(item.qty || 0) * discountedRate);

        }, 0);

        const gstAmount = qt?.isGst
            ? total * (Number(qt.gstRate || 0) / 100)
            : 0;

        const finalAmount = total + gstAmount;

        return {
            total,
            gstAmount,
            finalAmount
        };
    };

    // INDIVIDUAL ITEM AMOUNT
    const getItemAmount = (item) => {

        const qty = Number(item.qty) || 0;
        const rate = Number(item.rate) || 0;
        const discount = Number(item.discount) || 0;

        return qty * rate * (1 - discount / 100);
    };

    // FORM TOTALS
    const formTotal = items.reduce(
        (acc, item) => acc + getItemAmount(item),
        0
    );

    const formGstAmount = isGst
        ? formTotal * (Number(gstRate) || 0) / 100
        : 0;

    const formFinalAmount = formTotal + formGstAmount;

    // ADD ITEM
    const handleAddItem = () => {

        setItems([
            ...items,
            {
                sn: items.length + 1,
                description: '',
                unit: 'Sq. ft.',
                qty: 1,
                discount: 0,
                rate: 0
            }
        ]);
    };

    // REMOVE ITEM
    const handleRemoveItem = (index) => {

        if (items.length === 1) return;

        const updated = items
            .filter((_, i) => i !== index)
            .map((item, idx) => ({
                ...item,
                sn: idx + 1
            }));

        setItems(updated);
    };

    // UPDATE ITEM
    const handleItemChange = (index, field, value) => {

        const updated = [...items];

        updated[index] = {
            ...updated[index],
            [field]: value
        };

        setItems(updated);
    };

    // RESET FORM
    const resetForm = () => {

        setClientName('');
        setSiteLocation('');
        setProjectName('');

        setLayoutDetails('Civil Work (as per discussion)');
        setContractorName('AV TECH Baramati');

        setGstRate(18);
        setIsGst(true);

        setItems([
            {
                sn: 1,
                description: '',
                unit: 'Sq. ft.',
                qty: 1,
                discount: 0,
                rate: 0
            }
        ]);
    };

    // CREATE QUOTATION
    const handleCreateQuotation = async (e) => {

        e.preventDefault();

        if (isSaving) return;

        setIsSaving(true);

        const newQt = {

            quotationNumber:
                `QT-${Date.now().toString().slice(-6)}`,

            date: new Date().toLocaleDateString('en-GB'),

            isGst,

            gstRate: isGst
                ? Number(gstRate) || 0
                : 0,

            company: {
                name: 'NEXTGEN CONSTRUCTION',
                gstin: '27CFDPN2325F1ZP',
                officeAddress:
                    'Office Address: S No 346/3/B/4, Ground floor, Karbharinagar, Baramati, 413102',
                contact: '+91 9822000000'
            },

            clientName: clientName || 'Client Name',

            siteLocation: siteLocation || 'Baramati, Pune',

            layoutDetails: layoutDetails || 'Civil Work',

            contractorName: contractorName || 'AV TECH Baramati',

            projectName: projectName || 'General Project',

            items: items.map((item, idx) => ({
                ...item,
                sn: idx + 1,
                qty: Number(item.qty) || 0,
                discount: Number(item.discount) || 0,
                rate: Number(item.rate) || 0
            })),

            notes: [
                'SITE CLEARANCE AT CLIENT SCOPE',
                'AFTER COMPLETION OF WORK MEASUREMENT WILL BE TAKEN',
                isGst
                    ? `${gstRate}% GST WILL BE APPLIED`
                    : 'NON-GST QUOTATION',
                'EXTRA WORK WILL BE CHARGED EXTRA',
                'WATER & ELECTRICITY SUPPLY AT CLIENT SCOPE'
            ]
        };

        try {

            const response = await fetch(
                'http://localhost:5000/api/quotations',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newQt)
                }
            );

            if (response.ok) {

                const savedQuotation = await response.json();

                console.log(
                    'POST saved quotation:',
                    savedQuotation
                );

                const latestQuotations = await fetchQuotations();

                if (latestQuotations === null) {

                    alert(
                        t('quotationRefreshError')
                    );

                    return;
                }

                setShowCreateModal(false);

                resetForm();

            } else {

                const errorData = await response.json();

                console.error(
                    'Server validation error:',
                    errorData
                );

                alert(
                    `${t('failedToSaveQuotation')}: ${
                        errorData.error ||
                        errorData.message ||
                        t('unknownError')
                    }`
                );
            }

        } catch (error) {

            console.error(
                'Error saving quotation to database:',
                error
            );

            alert(t('backendConnectionError'));

        } finally {

            setIsSaving(false);

        }
    };

    // FILTER QUOTATIONS
    const filteredQuotations = quotations.filter(qt => {

        const search = searchTerm.toLowerCase();

        return (
            String(qt.quotationNumber || '').toLowerCase().includes(search) ||
            String(qt.clientName || '').toLowerCase().includes(search) ||
            String(qt.projectName || '').toLowerCase().includes(search)
        );
    });

    // SUMMARY
    const totalQuotationAmount = quotations.reduce(
        (sum, qt) => sum + calculateTotals(qt).finalAmount,
        0
    );

    const gstQuotationCount = quotations.filter(
        qt => qt.isGst
    ).length;

    return (

        <div className="nextgen-quotation-page">

            <style>{`

                .nextgen-quotation-page {
                    min-height: 100vh;
                    background: #f5f1eb;
                    padding: 28px;
                    color: #211b17;
                    font-family: 'DM Sans', sans-serif;
                }

                .nextgen-quotation-page * {
                    box-sizing: border-box;
                }

                .qt-top-heading {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 20px;
                    margin-bottom: 28px;
                }

                .qt-heading-left {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                }

                .qt-heading-icon {
                    width: 52px;
                    height: 52px;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #211b17;
                    color: #e8c29f;
                    box-shadow: 0 5px 15px rgba(33,27,23,.13);
                }

                .qt-heading-left h2 {
                    font-size: 25px;
                    font-weight: 800;
                    letter-spacing: -.6px;
                    margin: 0;
                    color: #211b17;
                }

                .qt-heading-left p {
                    font-size: 13px;
                    color: #87796c;
                    margin: 5px 0 0;
                }

                .qt-primary-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 9px;
                    background: #a45e30;
                    color: #fff;
                    border: none;
                    border-radius: 11px;
                    padding: 12px 19px;
                    font-size: 13px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: .2s ease;
                    box-shadow: 0 5px 12px rgba(164,94,48,.18);
                }

                .qt-primary-btn:hover {
                    background: #814622;
                    transform: translateY(-1px);
                }

                .qt-summary-grid {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 18px;
                    margin-bottom: 25px;
                }

                .qt-summary-card {
                    background: #fff;
                    border: 1px solid #e9dfd3;
                    border-radius: 16px;
                    padding: 21px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    min-width: 0;
                    box-shadow: 0 3px 12px rgba(45,34,24,.035);
                }

                .qt-summary-label {
                    font-size: 11px;
                    font-weight: 700;
                    color: #918274;
                    text-transform: uppercase;
                    letter-spacing: .8px;
                    margin-bottom: 9px;
                }

                .qt-summary-value {
                    font-size: 25px;
                    font-weight: 800;
                    color: #211b17;
                    overflow-wrap: anywhere;
                }

                .qt-summary-icon {
                    width: 46px;
                    height: 46px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f2e7dc;
                    color: #a45e30;
                    border-radius: 13px;
                    flex-shrink: 0;
                }

                .qt-list-card {
                    background: #fff;
                    border: 1px solid #e8dfd5;
                    border-radius: 17px;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(45,34,24,.035);
                }

                .qt-list-header {
                    padding: 21px 23px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 15px;
                    border-bottom: 1px solid #eee6de;
                    flex-wrap: wrap;
                }

                .qt-list-title {
                    font-size: 16px;
                    font-weight: 800;
                    color: #211b17;
                    margin: 0;
                }

                .qt-list-subtitle {
                    font-size: 12px;
                    color: #928578;
                    margin-top: 5px;
                }

                .qt-search-box {
                    position: relative;
                    width: 250px;
                    max-width: 100%;
                }

                .qt-search-box svg {
                    position: absolute;
                    left: 12px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #a29487;
                }

                .qt-search-box input {
                    width: 100%;
                    border: 1px solid #e6ddd3;
                    background: #faf8f5;
                    padding: 10px 12px 10px 36px;
                    border-radius: 9px;
                    font-size: 12px;
                    outline: none;
                    color: #211b17;
                }

                .qt-search-box input:focus {
                    border-color: #a45e30;
                }

                .qt-table-wrapper {
                    width: 100%;
                    overflow-x: auto;
                }

                .qt-table {
                    width: 100%;
                    border-collapse: collapse;
                    text-align: left;
                    min-width: 800px;
                }

                .qt-table thead {
                    background: #f7f3ee;
                }

                .qt-table th {
                    padding: 15px 18px;
                    font-size: 10px;
                    font-weight: 800;
                    color: #847466;
                    text-transform: uppercase;
                    letter-spacing: .7px;
                    white-space: nowrap;
                }

                .qt-table td {
                    padding: 17px 18px;
                    border-top: 1px solid #f0ebe5;
                    font-size: 12px;
                    color: #51483f;
                    white-space: nowrap;
                }

                .qt-table tbody tr {
                    transition: background .2s;
                }

                .qt-table tbody tr:hover {
                    background: #faf7f3;
                }

                .qt-number {
                    color: #a45e30 !important;
                    font-weight: 800;
                    font-family: monospace;
                    font-size: 13px !important;
                }

                .qt-client-name {
                    color: #211b17 !important;
                    font-weight: 700;
                }

                .qt-project-name {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                .qt-status {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    padding: 6px 10px;
                    border-radius: 30px;
                    font-size: 10px;
                    font-weight: 800;
                }

                .qt-status-gst {
                    background: #edf3e8;
                    color: #547344;
                }

                .qt-status-nongst {
                    background: #f1eae1;
                    color: #8b6746;
                }

                .qt-view-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                    border: 1px solid #e6d3c1;
                    color: #94552e;
                    background: #faf5ef;
                    border-radius: 8px;
                    padding: 8px 12px;
                    font-size: 11px;
                    font-weight: 800;
                    cursor: pointer;
                    transition: .2s;
                }

                .qt-view-btn:hover {
                    background: #a45e30;
                    color: #fff;
                    border-color: #a45e30;
                }

                .qt-empty-state {
                    padding: 65px 20px;
                    text-align: center;
                    color: #9b8c7d;
                }

                .qt-empty-icon {
                    width: 60px;
                    height: 60px;
                    background: #f5eee6;
                    color: #a45e30;
                    border-radius: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 15px;
                }

                .qt-empty-state h3 {
                    color: #45392e;
                    font-size: 15px;
                    font-weight: 800;
                    margin: 0 0 6px;
                }

                .qt-empty-state p {
                    font-size: 12px;
                    margin: 0;
                }

                /* CREATE MODAL */

                .qt-modal-overlay {
                    position: fixed;
                    inset: 0;
                    z-index: 1000;
                    background: rgba(21,17,14,.72);
                    backdrop-filter: blur(5px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }

                .qt-modal {
                    background: #fff;
                    width: 100%;
                    max-width: 850px;
                    max-height: 92vh;
                    overflow-y: auto;
                    border-radius: 19px;
                    box-shadow: 0 25px 80px rgba(0,0,0,.25);
                }

                .qt-modal-header {
                    background: #211b17;
                    color: #fff;
                    padding: 21px 25px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: sticky;
                    top: 0;
                    z-index: 5;
                }

                .qt-modal-header h3 {
                    font-size: 17px;
                    font-weight: 800;
                    margin: 0;
                }

                .qt-modal-header p {
                    color: #c7b8a9;
                    font-size: 11px;
                    margin: 5px 0 0;
                }

                .qt-modal-close {
                    width: 34px;
                    height: 34px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255,255,255,.1);
                    color: white;
                    border: none;
                    border-radius: 9px;
                    cursor: pointer;
                }

                .qt-modal-close:hover {
                    background: #a45e30;
                }

                .qt-modal-body {
                    padding: 25px;
                }

                .qt-form-section {
                    margin-bottom: 23px;
                }

                .qt-section-heading {
                    font-size: 11px;
                    color: #a45e30;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    padding-bottom: 11px;
                    border-bottom: 1px solid #eee5dc;
                    margin-bottom: 16px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .qt-form-grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 16px;
                }

                .qt-form-grid-three {
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                }

                .qt-field label {
                    display: block;
                    color: #65594e;
                    font-size: 11px;
                    font-weight: 800;
                    margin-bottom: 7px;
                }

                .qt-field input,
                .qt-field select {
                    width: 100%;
                    height: 41px;
                    padding: 0 12px;
                    background: #faf8f5;
                    border: 1px solid #e6ddd3;
                    border-radius: 8px;
                    font-size: 12px;
                    color: #30271f;
                    outline: none;
                }

                .qt-field input:focus,
                .qt-field select:focus {
                    border-color: #a45e30;
                    box-shadow: 0 0 0 3px rgba(164,94,48,.08);
                }

                .qt-gst-panel {
                    background: #f7f1e9;
                    border: 1px solid #e8d8c6;
                    border-radius: 12px;
                    padding: 17px;
                    margin-bottom: 22px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 14px;
                }

                .qt-gst-title {
                    font-size: 11px;
                    font-weight: 800;
                    color: #735032;
                    text-transform: uppercase;
                    letter-spacing: .7px;
                }

                .qt-radio-group {
                    display: flex;
                    align-items: center;
                    gap: 17px;
                    margin-top: 10px;
                }

                .qt-radio-group label {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    color: #493c30;
                    font-size: 12px;
                    font-weight: 600;
                    cursor: pointer;
                }

                .qt-radio-group input {
                    accent-color: #a45e30;
                }

                .qt-gst-rate {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    font-size: 11px;
                    font-weight: 800;
                    color: #735032;
                }

                .qt-gst-rate input {
                    width: 75px;
                    padding: 8px;
                    border: 1px solid #ddc5ac;
                    border-radius: 7px;
                    outline: none;
                    background: white;
                    font-weight: 700;
                }

                /* ITEMS */

                .qt-item-container {
                    background: #faf8f5;
                    border: 1px solid #ece3da;
                    padding: 12px;
                    border-radius: 11px;
                    margin-bottom: 10px;
                }

                .qt-item-grid {
                    display: grid;
                    grid-template-columns: 30px minmax(130px, 2fr) 90px 75px 85px 80px 32px;
                    gap: 8px;
                    align-items: center;
                }

                .qt-item-grid input,
                .qt-item-grid select {
                    min-width: 0;
                    width: 100%;
                    height: 36px;
                    padding: 0 7px;
                    border: 1px solid #e3d9ce;
                    border-radius: 6px;
                    outline: none;
                    background: white;
                    color: #30271f;
                    font-size: 11px;
                }

                .qt-item-grid input:focus,
                .qt-item-grid select:focus {
                    border-color: #a45e30;
                }

                .qt-item-number {
                    font-size: 11px;
                    font-weight: 800;
                    color: #a45e30;
                    text-align: center;
                }

                .qt-item-amount {
                    font-size: 11px;
                    font-weight: 800;
                    text-align: right;
                    color: #7c4829;
                    overflow: hidden;
                }

                .qt-delete-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: none;
                    background: #f8e9e7;
                    color: #bd5148;
                    width: 30px;
                    height: 30px;
                    border-radius: 7px;
                    cursor: pointer;
                }

                .qt-delete-btn:hover {
                    background: #bd5148;
                    color: white;
                }

                .qt-add-item {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    border: 1px dashed #c79b77;
                    background: #fbf6f0;
                    color: #99572f;
                    padding: 10px 14px;
                    border-radius: 8px;
                    font-size: 11px;
                    font-weight: 800;
                    cursor: pointer;
                    margin-top: 5px;
                }

                .qt-add-item:hover {
                    background: #f2e5d8;
                }

                /* TOTALS */

                .qt-total-panel {
                    background: #211b17;
                    border-radius: 12px;
                    padding: 20px;
                    color: #e9ddd0;
                    margin-top: 22px;
                }

                .qt-total-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 6px 0;
                    font-size: 12px;
                    color: #d0c0af;
                }

                .qt-total-final {
                    border-top: 1px solid #65503d;
                    margin-top: 10px;
                    padding-top: 14px;
                    font-size: 16px;
                    font-weight: 800;
                    color: #e8c29f;
                }

                .qt-modal-footer {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    gap: 10px;
                    padding-top: 20px;
                    margin-top: 22px;
                    border-top: 1px solid #eee5dc;
                }

                .qt-cancel-btn {
                    padding: 11px 19px;
                    border: 1px solid #e1d8cf;
                    background: white;
                    color: #62564a;
                    border-radius: 9px;
                    font-size: 12px;
                    font-weight: 700;
                    cursor: pointer;
                }

                .qt-cancel-btn:hover {
                    background: #f5f1eb;
                }

                .qt-save-btn {
                    padding: 11px 20px;
                    border: none;
                    background: #a45e30;
                    color: white;
                    border-radius: 9px;
                    font-size: 12px;
                    font-weight: 800;
                    cursor: pointer;
                }

                .qt-save-btn:hover {
                    background: #814622;
                }

                .qt-save-btn:disabled {
                    opacity: .6;
                    cursor: not-allowed;
                }

                /* QUOTATION VIEW */

                .qt-paper-area {
                    background: #eae4dc;
                    min-height: 100vh;
                    padding: 25px;
                    border-radius: 15px;
                }

                .qt-paper-actions {
                    max-width: 850px;
                    margin: 0 auto 20px;
                    display: flex;
                    justify-content: space-between;
                    gap: 12px;
                }

                .qt-back-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: white;
                    border: 1px solid #ded3c7;
                    color: #45382d;
                    padding: 10px 15px;
                    border-radius: 9px;
                    font-size: 12px;
                    font-weight: 800;
                    cursor: pointer;
                }

                .qt-print-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: #211b17;
                    color: #e8c29f;
                    border: none;
                    padding: 10px 17px;
                    border-radius: 9px;
                    font-size: 12px;
                    font-weight: 800;
                    cursor: pointer;
                }

                .qt-paper {
                    background: white;
                    max-width: 850px;
                    margin: 0 auto;
                    padding: 40px;
                    border: 1px solid #d5c6b5;
                    box-shadow: 0 10px 35px rgba(40,30,20,.12);
                    color: #171411;
                    font-family: Arial, sans-serif;
                    font-size: 12px;
                }

                .qt-paper-header {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    padding-bottom: 20px;
                    border-bottom: 2px solid #211b17;
                }

                .qt-paper-logo {
                    width: 85px;
                    height: 85px;
                    object-fit: contain;
                    border: 1px solid #e5ded5;
                    padding: 4px;
                }

                .qt-paper-company h2 {
                    font-size: 20px;
                    font-weight: 900;
                    letter-spacing: 1px;
                    margin: 0 0 7px;
                    color: #211b17;
                }

                .qt-paper-company p {
                    font-size: 10px;
                    color: #5e554b;
                    margin: 4px 0;
                    line-height: 1.5;
                }

                .qt-paper-title {
                    text-align: center;
                    font-size: 17px;
                    letter-spacing: 3px;
                    font-weight: 900;
                    color: #a45e30;
                    padding: 18px 0;
                    border-bottom: 1px solid #c8b49e;
                }

                .qt-paper-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 15px;
                }

                .qt-paper-table td,
                .qt-paper-table th {
                    border: 1px solid #53483c;
                    padding: 10px;
                    text-align: left;
                }

                .qt-paper-table th {
                    background: #eee5d9;
                    font-weight: 800;
                    color: #211b17;
                    font-size: 10px;
                    text-transform: uppercase;
                }

                .qt-paper-table .qt-paper-label {
                    width: 27%;
                    font-weight: 800;
                    background: #f7f3ed;
                }

                .qt-paper-section {
                    background: #211b17 !important;
                    color: #e8c29f !important;
                    text-align: center !important;
                    font-weight: 900;
                    letter-spacing: 1px;
                    padding: 11px !important;
                }

                .qt-paper-total td {
                    font-weight: 800;
                    background: #f8f4ef;
                }

                .qt-paper-grand-total td {
                    background: #ead9c6;
                    font-weight: 900;
                    font-size: 13px;
                }

                .qt-paper-notes {
                    line-height: 1.8;
                    padding-left: 20px;
                    font-size: 10px;
                }

                .qt-paper-signature {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-top: 75px;
                    font-size: 11px;
                    font-weight: 800;
                }

                .qt-paper-signature div:last-child {
                    width: 175px;
                    border-top: 1px solid #211b17;
                    text-align: center;
                    padding-top: 8px;
                }

                @media (max-width: 900px) {

                    .nextgen-quotation-page {
                        padding: 20px;
                    }

                    .qt-summary-grid {
                        gap: 12px;
                    }

                    .qt-item-grid {
                        grid-template-columns: 28px minmax(110px, 2fr) 75px 65px 75px 75px 30px;
                        gap: 5px;
                    }

                    .qt-paper {
                        padding: 25px;
                    }
                }

                @media (max-width: 650px) {

                    .nextgen-quotation-page {
                        padding: 14px;
                    }

                    .qt-top-heading {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .qt-heading-left h2 {
                        font-size: 20px;
                    }

                    .qt-primary-btn {
                        width: 100%;
                    }

                    .qt-summary-grid {
                        grid-template-columns: 1fr;
                        gap: 10px;
                    }

                    .qt-summary-card {
                        padding: 16px;
                    }

                    .qt-summary-value {
                        font-size: 22px;
                    }

                    .qt-list-header {
                        align-items: stretch;
                        flex-direction: column;
                    }

                    .qt-search-box {
                        width: 100%;
                    }

                    .qt-form-grid,
                    .qt-form-grid-three {
                        grid-template-columns: 1fr;
                    }

                    .qt-modal-overlay {
                        padding: 8px;
                        align-items: center;
                    }

                    .qt-modal {
                        max-height: 96vh;
                        border-radius: 13px;
                    }

                    .qt-modal-body {
                        padding: 16px;
                    }

                    .qt-gst-panel {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .qt-radio-group {
                        flex-wrap: wrap;
                        gap: 12px;
                    }

                    .qt-item-container {
                        overflow-x: auto;
                    }

                    .qt-item-grid {
                        min-width: 570px;
                    }

                    .qt-paper-area {
                        padding: 10px;
                        overflow-x: auto;
                    }

                    .qt-paper-actions {
                        flex-wrap: wrap;
                    }

                    .qt-paper {
                        min-width: 650px;
                        padding: 20px;
                    }

                    .qt-paper-header {
                        gap: 12px;
                    }

                    .qt-paper-logo {
                        width: 65px;
                        height: 65px;
                    }

                    .qt-paper-company h2 {
                        font-size: 16px;
                    }

                    .qt-modal-footer {
                        flex-wrap: wrap;
                    }

                    .qt-save-btn,
                    .qt-cancel-btn {
                        flex: 1;
                    }
                }

                @media print {

                    @page {
                        size: A4;
                        margin: 10mm;
                    }

                    body {
                        background: white !important;
                    }

                    body * {
                        visibility: hidden !important;
                    }

                    #qt-printable,
                    #qt-printable * {
                        visibility: visible !important;
                    }

                    #qt-printable {
                        position: absolute !important;
                        top: 0 !important;
                        left: 0 !important;
                        width: 100% !important;
                        max-width: none !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        border: none !important;
                        box-shadow: none !important;
                    }

                    .no-print {
                        display: none !important;
                    }

                    .qt-paper-table th,
                    .qt-paper-section,
                    .qt-paper-grand-total td {
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                }

            `}</style>

            {selectedQuotation ? (

                /* ============================
                   QUOTATION DOCUMENT VIEW
                ============================ */

                <div className="qt-paper-area">

                    <div className="qt-paper-actions no-print">

                        <button
                            onClick={() => setSelectedQuotation(null)}
                            className="qt-back-btn"
                        >
                            <ArrowLeft size={16} />
                            {t('backToQuotations')}
                        </button>

                        <button
                            onClick={handlePrint}
                            className="qt-print-btn"
                        >
                            <Printer size={16} />
                            {t('printSavePdf')}
                        </button>

                    </div>

                    <div
                        id="qt-printable"
                        className="qt-paper"
                    >

                        <div className="qt-paper-header">

                            <img
                                src="/logo.png"
                                alt="NextGen Logo"
                                className="qt-paper-logo"
                            />

                            <div className="qt-paper-company">

                                <h2>
                                    {selectedQuotation.company?.name || 'NEXTGEN CONSTRUCTION'}
                                </h2>

                                <p>
                                    {t('gstinLabel')}: {selectedQuotation.company?.gstin || ''}
                                </p>

                                <p>
                                    {selectedQuotation.company?.officeAddress || ''}
                                </p>

                                <p>
                                    {t('contactNoLabel')}: {selectedQuotation.company?.contact || ''}
                                </p>

                            </div>

                        </div>

                        <div className="qt-paper-title">
                            {t('projectBudgetSummary')}
                            <div style={{
                                fontSize: '11px',
                                marginTop: '7px',
                                letterSpacing: '2px'
                            }}>
                                {t('quotationLabel')}
                            </div>
                        </div>

                        <table className="qt-paper-table">

                            <tbody>

                                <tr>
                                    <td className="qt-paper-label">
                                        {t('quotationNumber')}
                                    </td>
                                    <td>
                                        {selectedQuotation.quotationNumber}
                                    </td>
                                </tr>

                                <tr>
                                    <td className="qt-paper-label">
                                        {t('date')}
                                    </td>
                                    <td>
                                        {selectedQuotation.date}
                                    </td>
                                </tr>

                                <tr>
                                    <td className="qt-paper-label">
                                        {t('nameOfClient')}
                                    </td>
                                    <td>
                                        {selectedQuotation.clientName}
                                    </td>
                                </tr>

                                <tr>
                                    <td className="qt-paper-label">
                                        {t('addressSiteLocation')}
                                    </td>
                                    <td>
                                        {selectedQuotation.siteLocation}
                                    </td>
                                </tr>

                                <tr>
                                    <td className="qt-paper-label">
                                        {t('layoutDetails')}
                                    </td>
                                    <td>
                                        {selectedQuotation.layoutDetails}
                                    </td>
                                </tr>

                                <tr>
                                    <td className="qt-paper-label">
                                        {t('builderContractorName')}
                                    </td>
                                    <td>
                                        {selectedQuotation.contractorName}
                                    </td>
                                </tr>

                                <tr>
                                    <td className="qt-paper-label">
                                        {t('nameOfProject')}
                                    </td>
                                    <td>
                                        {selectedQuotation.projectName}
                                    </td>
                                </tr>

                                <tr>
                                    <td
                                        colSpan="2"
                                        className="qt-paper-section"
                                    >
                                        {t('descriptionOfWork')}
                                    </td>
                                </tr>

                            </tbody>

                        </table>

                        <table className="qt-paper-table">

                            <thead>

                                <tr>
                                    <th style={{ width: '8%' }}>
                                        {t('srNo')}
                                    </th>

                                    <th>
                                        {t('descriptionOfWork')}
                                    </th>

                                    <th style={{ width: '13%' }}>
                                        {t('unit')}
                                    </th>

                                    <th style={{ width: '10%' }}>
                                        {t('qty')}
                                    </th>

                                    <th style={{ width: '15%' }}>
                                        {t('rate')}
                                    </th>

                                    <th style={{ width: '17%' }}>
                                        {t('amount')}
                                    </th>
                                </tr>

                            </thead>

                            <tbody>

                                {[...Array(Math.max(
                                    10,
                                    selectedQuotation.items?.length || 0
                                ))].map((_, idx) => {

                                    const item = selectedQuotation.items?.[idx];

                                    const itemAmount = item
                                        ? getItemAmount(item)
                                        : null;

                                    return (

                                        <tr key={idx}>

                                            <td style={{ textAlign: 'center' }}>
                                                {idx + 1}
                                            </td>

                                            <td>
                                                {item?.description || ''}
                                            </td>

                                            <td>
                                                {item?.unit || ''}
                                            </td>

                                            <td style={{ textAlign: 'center' }}>
                                                {item?.qty ?? ''}
                                            </td>

                                            <td style={{ textAlign: 'right' }}>
                                                {item
                                                    ? `₹${Number(item.rate || 0).toFixed(2)}`
                                                    : ''
                                                }
                                            </td>

                                            <td style={{ textAlign: 'right' }}>
                                                {item
                                                    ? `₹${itemAmount.toFixed(2)}`
                                                    : ''
                                                }
                                            </td>

                                        </tr>

                                    );

                                })}

                            </tbody>

                        </table>

                        {(() => {

                            const {
                                total,
                                gstAmount,
                                finalAmount
                            } = calculateTotals(selectedQuotation);

                            return (

                                <table className="qt-paper-table">

                                    <tbody>

                                        <tr className="qt-paper-total">

                                            <td colSpan="5" style={{
                                                textAlign: 'right'
                                            }}>
                                                {t('totalAmount')}
                                            </td>

                                            <td style={{
                                                textAlign: 'right'
                                            }}>
                                                ₹{total.toFixed(2)}
                                            </td>

                                        </tr>

                                        {selectedQuotation.isGst && (

                                            <tr className="qt-paper-total">

                                                <td colSpan="5" style={{
                                                    textAlign: 'right'
                                                }}>
                                                    {t('gstLabel')} ({selectedQuotation.gstRate}%)
                                                </td>

                                                <td style={{
                                                    textAlign: 'right'
                                                }}>
                                                    ₹{gstAmount.toFixed(2)}
                                                </td>

                                            </tr>

                                        )}

                                        <tr className="qt-paper-grand-total">

                                            <td colSpan="5" style={{
                                                textAlign: 'right'
                                            }}>
                                                {t('finalTotalAmount')}
                                            </td>

                                            <td style={{
                                                textAlign: 'right'
                                            }}>
                                                ₹{finalAmount.toFixed(2)}
                                            </td>

                                        </tr>

                                    </tbody>

                                </table>

                            );

                        })()}

                        <table className="qt-paper-table">

                            <tbody>

                                <tr>
                                    <td className="qt-paper-section">
                                        {t('termsAndConditions')}
                                    </td>
                                </tr>

                                <tr>
                                    <td>

                                        <ol className="qt-paper-notes">

                                            {(Array.isArray(selectedQuotation.notes)
                                                ? selectedQuotation.notes
                                                : []
                                            ).map((note, i) => (

                                                <li key={i}>
                                                    {note}
                                                </li>

                                            ))}

                                        </ol>

                                    </td>
                                </tr>

                            </tbody>

                        </table>

                        <div className="qt-paper-signature">

                            <div>
                                For {selectedQuotation.company?.name || 'NEXTGEN CONSTRUCTION'}
                            </div>

                            <div>
                                {t('authorizedSignatory')}
                            </div>

                        </div>

                    </div>

                </div>

            ) : (

                /* ============================
                   QUOTATION DASHBOARD
                ============================ */

                <>

                    <div className="qt-top-heading">

                        <div className="qt-heading-left">

                            <div className="qt-heading-icon">
                                <FileText size={25} />
                            </div>

                            <div>

                                <h2>
                                    {t('quotationsPageTitle')}
                                </h2>

                                <p>
                                    {t('quotationsPageSub')}
                                </p>

                            </div>

                        </div>

                        <button
                            onClick={() => setShowCreateModal(true)}
                            className="qt-primary-btn"
                        >
                            <Plus size={17} />
                            {t('createNewQuotation')}
                        </button>

                    </div>

                    {/* SUMMARY CARDS */}

                    <div className="qt-summary-grid">

                        <div className="qt-summary-card">

                            <div>

                                <div className="qt-summary-label">
                                    {t('totalQuotations')}
                                </div>

                                <div className="qt-summary-value">
                                    {quotations.length}
                                </div>

                            </div>

                            <div className="qt-summary-icon">
                                <FileText size={22} />
                            </div>

                        </div>

                        <div className="qt-summary-card">

                            <div>

                                <div className="qt-summary-label">
                                    {t('gstQuotations')}
                                </div>

                                <div className="qt-summary-value">
                                    {gstQuotationCount}
                                </div>

                            </div>

                            <div className="qt-summary-icon">
                                <Receipt size={22} />
                            </div>

                        </div>

                        <div className="qt-summary-card">

                            <div>

                                <div className="qt-summary-label">
                                    {t('totalQuotationValue')}
                                </div>

                                <div className="qt-summary-value">
                                    ₹{totalQuotationAmount.toLocaleString('en-IN', {
                                        maximumFractionDigits: 0
                                    })}
                                </div>

                            </div>

                            <div className="qt-summary-icon">
                                <Calculator size={22} />
                            </div>

                        </div>

                    </div>

                    {/* QUOTATION TABLE */}

                    <div className="qt-list-card">

                        <div className="qt-list-header">

                            <div>

                                <h3 className="qt-list-title">
                                    {t('quotationsRecords')}
                                </h3>

                                <div className="qt-list-subtitle">
                                    {t('allGeneratedQuotations')}
                                </div>

                            </div>

                            <div className="qt-search-box">

                                <Search size={15} />

                                <input
                                    type="text"
                                    placeholder={t("searchPlaceholder")}
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                />

                            </div>

                        </div>

                        <div className="qt-table-wrapper">

                            <table className="qt-table">

                                <thead>

                                    <tr>

                                        <th>{t('quotationId')}</th>
                                        <th>{t('clientName')}</th>
                                        <th>{t('project')}</th>
                                        <th>{t('type')}</th>
                                        <th>{t('date')}</th>
                                        <th>{t('totalAmount')}</th>
                                        <th style={{ textAlign: 'right' }}>
                                            {t('action')}
                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {filteredQuotations.length === 0 ? (

                                        <tr>

                                            <td colSpan="7">

                                                <div className="qt-empty-state">

                                                    <div className="qt-empty-icon">
                                                        <FileText size={27} />
                                                    </div>

                                                    <h3>
                                                        {t('noQuotationsFound')}
                                                    </h3>

                                                    <p>
                                                        {searchTerm
                                                            ? t('tryAnotherKeyword')
                                                            : t('createFirstQuotationPrompt')
                                                        }
                                                    </p>

                                                </div>

                                            </td>

                                        </tr>

                                    ) : (

                                        filteredQuotations.map(qt => {

                                            const { finalAmount } =
                                                calculateTotals(qt);

                                            return (

                                                <tr key={qt._id || qt.quotationNumber}>

                                                    <td className="qt-number">
                                                        {qt.quotationNumber}
                                                    </td>

                                                    <td className="qt-client-name">
                                                        {qt.clientName}
                                                    </td>

                                                    <td>

                                                        <span className="qt-project-name">
                                                            <Building2 size={14} />
                                                            {qt.projectName || '-'}
                                                        </span>

                                                    </td>

                                                    <td>

                                                        <span className={`qt-status ${
                                                            qt.isGst
                                                                ? 'qt-status-gst'
                                                                : 'qt-status-nongst'
                                                        }`}>

                                                            {qt.isGst
                                                                ? `${t('gstLabel')} (${qt.gstRate}%)`
                                                                : t('withoutGst')
                                                            }

                                                        </span>

                                                    </td>

                                                    <td>
                                                        {qt.date}
                                                    </td>

                                                    <td style={{
                                                        fontWeight: 800,
                                                        color: '#211b17'
                                                    }}>
                                                        ₹{finalAmount.toFixed(2)}
                                                    </td>

                                                    <td style={{
                                                        textAlign: 'right'
                                                    }}>

                                                        <button
                                                            onClick={() => setSelectedQuotation(qt)}
                                                            className="qt-view-btn"
                                                        >
                                                            <Eye size={14} />
                                                            {t('viewQuotation')}
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

                </>

            )}

            {/* ============================
                CREATE QUOTATION MODAL
            ============================ */}

            {showCreateModal && (

                <div
                    className="qt-modal-overlay"
                    onClick={e => {
                        if (e.target === e.currentTarget) {
                            setShowCreateModal(false);
                        }
                    }}
                >

                    <div className="qt-modal">

                        <div className="qt-modal-header">

                            <div>

                                <h3>
                                    {t('createNewQuotation')}
                                </h3>

                                <p>
                                    {t('prepareProfessionalEstimate')}
                                </p>

                            </div>

                            <button
                                type="button"
                                onClick={() => setShowCreateModal(false)}
                                className="qt-modal-close"
                            >
                                <X size={19} />
                            </button>

                        </div>

                        <div className="qt-modal-body">

                            <form onSubmit={handleCreateQuotation}>

                                {/* GST SETTINGS */}

                                <div className="qt-gst-panel">

                                    <div>

                                        <div className="qt-gst-title">
                                            {t('quotationBillingType')}
                                        </div>

                                        <div className="qt-radio-group">

                                            <label>

                                                <input
                                                    type="radio"
                                                    name="qtGstOption"
                                                    checked={isGst === true}
                                                    onChange={() => setIsGst(true)}
                                                />

                                                {t('withGst')}

                                            </label>

                                            <label>

                                                <input
                                                    type="radio"
                                                    name="qtGstOption"
                                                    checked={isGst === false}
                                                    onChange={() => setIsGst(false)}
                                                />

                                                {t('withoutGst')}

                                            </label>

                                        </div>

                                    </div>

                                    {isGst && (

                                        <div className="qt-gst-rate">

                                            {t('gstRatePercent')}

                                            <input
                                                type="number"
                                                min="0"
                                                max="100"
                                                step="any"
                                                value={gstRate}
                                                onChange={e =>
                                                    setGstRate(
                                                        e.target.value === ''
                                                            ? ''
                                                            : Number(e.target.value)
                                                    )
                                                }
                                            />

                                        </div>

                                    )}

                                </div>

                                {/* CLIENT DETAILS */}

                                <div className="qt-form-section">

                                    <div className="qt-section-heading">
                                        <Building2 size={15} />
                                        {t('clientProjectDetails')}
                                    </div>

                                    <div className="qt-form-grid">

                                        <div className="qt-field">

                                            <label>
                                                {t('clientName')} *
                                            </label>

                                            <input
                                                type="text"
                                                required
                                                placeholder={t("enterClientName")}
                                                value={clientName}
                                                onChange={e => setClientName(e.target.value)}
                                            />

                                        </div>

                                        <div className="qt-field">

                                            <label>
                                                {t('projectName')}
                                            </label>

                                            <input
                                                type="text"
                                                placeholder={t("enterProjectName")}
                                                value={projectName}
                                                onChange={e => setProjectName(e.target.value)}
                                            />

                                        </div>

                                    </div>

                                    <div
                                        className="qt-form-grid qt-form-grid-three"
                                        style={{ marginTop: 16 }}
                                    >

                                        <div className="qt-field">

                                            <label>
                                                <MapPin size={12} style={{
                                                    display: 'inline',
                                                    marginRight: 4
                                                }} />
                                                {t('siteLocationPlaceholder')}
                                            </label>

                                            <input
                                                type="text"
                                                placeholder={t("siteLocationPlaceholder")}
                                                value={siteLocation}
                                                onChange={e => setSiteLocation(e.target.value)}
                                            />

                                        </div>

                                        <div className="qt-field">

                                            <label>
                                                {t('layoutDetails')}
                                            </label>

                                            <input
                                                type="text"
                                                value={layoutDetails}
                                                onChange={e => setLayoutDetails(e.target.value)}
                                            />

                                        </div>

                                        <div className="qt-field">

                                            <label>
                                                {t('contractorName')}
                                            </label>

                                            <input
                                                type="text"
                                                value={contractorName}
                                                onChange={e => setContractorName(e.target.value)}
                                            />

                                        </div>

                                    </div>

                                </div>

                                {/* WORK DETAILS */}

                                <div className="qt-form-section">

                                    <div className="qt-section-heading">
                                        <HardHat size={15} />
                                        {t('descriptionOfWork')}
                                    </div>

                                    <div style={{
                                        fontSize: 11,
                                        color: '#968778',
                                        marginBottom: 13
                                    }}>
                                        {t('addWorkDetailsSub')}
                                    </div>

                                    {items.map((item, idx) => {

                                        const lineTotal = getItemAmount(item);

                                        return (

                                            <div
                                                key={idx}
                                                className="qt-item-container"
                                            >

                                                <div className="qt-item-grid">

                                                    <div className="qt-item-number">
                                                        #{idx + 1}
                                                    </div>

                                                    <input
                                                        type="text"
                                                        placeholder={t("workDescription")}
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

                                                    <input
                                                        type="number"
                                                        placeholder={t("qty")}
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

                                                    <input
                                                        type="number"
                                                        placeholder={t("ratePlaceholder")}
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

                                                    <div className="qt-item-amount">
                                                        ₹{lineTotal.toFixed(2)}
                                                    </div>

                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemoveItem(idx)}
                                                        className="qt-delete-btn"
                                                        title={t("removeItem")}
                                                    >
                                                        <Trash2 size={14} />
                                                    </button>

                                                </div>

                                            </div>

                                        );

                                    })}

                                    <button
                                        type="button"
                                        onClick={handleAddItem}
                                        className="qt-add-item"
                                    >
                                        <Plus size={15} />
                                        {t('addLineItem')}
                                    </button>

                                </div>

                                {/* TOTAL CALCULATION */}

                                <div className="qt-total-panel">

                                    <div className="qt-total-row">

                                        <span>
                                            {t('totalAmount')}
                                        </span>

                                        <span>
                                            ₹{formTotal.toFixed(2)}
                                        </span>

                                    </div>

                                    {isGst && (

                                        <div className="qt-total-row">

                                            <span>
                                                {t('gstLabel')} ({gstRate || 0}%)
                                            </span>

                                            <span>
                                                ₹{formGstAmount.toFixed(2)}
                                            </span>

                                        </div>

                                    )}

                                    <div className="qt-total-row qt-total-final">

                                        <span>
                                            {t('finalTotalAmount')}
                                        </span>

                                        <span>
                                            ₹{formFinalAmount.toFixed(2)}
                                        </span>

                                    </div>

                                </div>

                                {/* ACTION BUTTONS */}

                                <div className="qt-modal-footer">

                                    <button
                                        type="button"
                                        onClick={() => setShowCreateModal(false)}
                                        className="qt-cancel-btn"
                                    >
                                        {t('cancel')}
                                    </button>

                                    <button
                                        type="submit"
                                        disabled={isSaving}
                                        className="qt-save-btn"
                                    >
                                        {isSaving
                                            ? t('saving')
                                            : t('saveGenerateQuotation')
                                        }
                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            )}

        </div>

    );

}
