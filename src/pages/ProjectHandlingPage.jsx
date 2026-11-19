import React, { useState, useEffect } from 'react';
import {
  FolderKanban,
  Upload,
  Image as ImageIcon,
  FileText,
  Box,
  Receipt,
  Plus,
  X,
  Eye,
  Calendar,
  MapPin,
  Trash2,
  Building2,
  HardHat,
  Layers,
  IndianRupee,
  FileImage,
  BriefcaseBusiness
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';

const API_URL = '/api/projects';

const EMPTY_FILES = {
  photos: [],
  plans: [],
  gallery: [],
  docs: [],
  bills: []
};

export default function ProjectHandlingPage() {
  const { lang, t } = useLanguage();
  const locale = lang === 'mr' ? 'mr-IN' : 'en-IN';

  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('photos');

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);
  const [selectedImageModal, setSelectedImageModal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [newProjectName, setNewProjectName] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newClient, setNewClient] = useState('');

  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadVendor, setUploadVendor] = useState('');
  const [uploadAmount, setUploadAmount] = useState('');
  const [uploadCategory, setUploadCategory] = useState('Raw Materials');
  const [uploadFilePreview, setUploadFilePreview] = useState('');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      const normalizedProjects = Array.isArray(data)
        ? data.map(project => ({
            ...project,
            files: {
              ...EMPTY_FILES,
              ...(project.files || {})
            }
          }))
        : [];

      setProjects(normalizedProjects);

      setSelectedProject(previous => {
        if (!normalizedProjects.length) return null;

        if (previous) {
          return (
            normalizedProjects.find(project => project._id === previous._id) ||
            normalizedProjects[0]
          );
        }

        return normalizedProjects[0];
      });
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateProject = async (e) => {
    e.preventDefault();

    if (!newProjectName.trim()) {
      alert(t('alertEnterProjectName'));
      return;
    }

    const newProj = {
      name: newProjectName.trim(),
      location: newLocation || t('defaultLocationBaramati'),
      client: newClient || t('defaultClientName'),
      startDate: new Date().toLocaleDateString('en-GB'),
      status: 'In Progress',
      files: { ...EMPTY_FILES }
    };

    try {
      setSaving(true);

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProj)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || t('alertFailedCreateProject'));
      }

      const savedProject = await response.json();

      const normalizedProject = {
        ...savedProject,
        files: {
          ...EMPTY_FILES,
          ...(savedProject.files || {})
        }
      };

      setProjects(previous => [normalizedProject, ...previous]);
      setSelectedProject(normalizedProject);
      setShowCreateProjectModal(false);

      setNewProjectName('');
      setNewLocation('');
      setNewClient('');
    } catch (error) {
      console.error('Error creating project:', error);
      alert(error.message || t('alertBackendConnect'));
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteProject = async (projectId) => {
    if (!projectId) return;

    if (!window.confirm(t('confirmDeleteProject'))) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${projectId}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error(t('alertUnableDeleteProject'));
      }

      const updatedProjects = projects.filter(
        project => project._id !== projectId
      );

      setProjects(updatedProjects);
      setSelectedProject(updatedProjects[0] || null);
    } catch (error) {
      console.error('Error deleting project:', error);
      alert(error.message);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadFilePreview(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleUploadSubmit = async (e) => {
    e.preventDefault();

    if (!selectedProject) return;

    const currentDate = new Date().toISOString().split('T')[0];

    const updatedFiles = {
      ...EMPTY_FILES,
      ...(selectedProject.files || {})
    };

    if (activeTab === 'bills') {
      const newBill = {
        id: Date.now(),
        vendor: uploadVendor || t('generalVendor'),
        billNo: `BILL-${Math.floor(1000 + Math.random() * 9000)}`,
        date: currentDate,
        amount: Number(uploadAmount) || 0,
        category: uploadCategory
      };

      updatedFiles.bills = [newBill, ...(updatedFiles.bills || [])];
    } else {
      const newAsset = {
        id: Date.now(),
        title: uploadTitle || t('untitledAsset'),
        date: currentDate,
        url:
          uploadFilePreview ||
          'https://images.unsplash.com/photo-1541888946425-d0fbb18f86f7?w=600',
        size: '1.8 MB',
        type: activeTab === 'docs' ? t('pdfType') : t('imageType')
      };

      updatedFiles[activeTab] = [newAsset, ...(updatedFiles[activeTab] || [])];
    }

    try {
      setSaving(true);

      const response = await fetch(`${API_URL}/${selectedProject._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          files: updatedFiles
        })
      });

      if (!response.ok) {
        throw new Error(t('alertUnableSaveFiles'));
      }

      const updatedProject = await response.json();

      const normalizedProject = {
        ...updatedProject,
        files: {
          ...EMPTY_FILES,
          ...(updatedProject.files || {})
        }
      };

      setSelectedProject(normalizedProject);

      setProjects(previous =>
        previous.map(project =>
          project._id === normalizedProject._id ? normalizedProject : project
        )
      );

      setShowUploadModal(false);
      resetUploadForm();
    } catch (error) {
      console.error('Error uploading project file:', error);
      alert(error.message);
    } finally {
      setSaving(false);
    }
  };

  const resetUploadForm = () => {
    setUploadTitle('');
    setUploadVendor('');
    setUploadAmount('');
    setUploadFilePreview('');
    setUploadCategory('Raw Materials');
  };

  const handleDeleteItem = async (itemId, categoryTab) => {
    if (!selectedProject) return;

    const updatedFiles = {
      ...EMPTY_FILES,
      ...(selectedProject.files || {})
    };

    updatedFiles[categoryTab] = (updatedFiles[categoryTab] || []).filter(
      item => item.id !== itemId && item._id !== itemId
    );

    try {
      const response = await fetch(`${API_URL}/${selectedProject._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          files: updatedFiles
        })
      });

      if (!response.ok) {
        throw new Error(t('alertUnableDeleteItem'));
      }

      const updatedProject = await response.json();

      const normalizedProject = {
        ...updatedProject,
        files: {
          ...EMPTY_FILES,
          ...(updatedProject.files || {})
        }
      };

      setSelectedProject(normalizedProject);

      setProjects(previous =>
        previous.map(project =>
          project._id === normalizedProject._id ? normalizedProject : project
        )
      );
    } catch (error) {
      console.error('Error deleting item:', error);
      alert(error.message);
    }
  };

  const getStatusLabel = (status) => {
    if (!status || status === 'In Progress') return t('inProgress');
    return status;
  };

  const getCategoryLabel = (category) => {
    switch (category) {
      case 'Raw Materials':
        return t('catRawMaterials');
      case 'Electrical & Plumbing':
        return t('catElectricalPlumbing');
      case 'Finishing & Tiles':
        return t('catFinishingTiles');
      case 'Labor & Equipment':
        return t('catLaborEquipment');
      case 'General':
      default:
        return category || t('generalCategory');
    }
  };

  const files = {
    ...EMPTY_FILES,
    ...(selectedProject?.files || {})
  };

  const tabs = [
    {
      id: 'photos',
      label: t('tabPhotosLabel'),
      description: t('tabPhotosDesc'),
      icon: ImageIcon
    },
    {
      id: 'plans',
      label: t('tabPlansLabel'),
      description: t('tabPlansDesc'),
      icon: Box
    },
    {
      id: 'gallery',
      label: t('tabGalleryLabel'),
      description: t('tabGalleryDesc'),
      icon: Layers
    },
    {
      id: 'docs',
      label: t('tabDocsLabel'),
      description: t('tabDocsDesc'),
      icon: FileText
    },
    {
      id: 'bills',
      label: t('tabBillsLabel'),
      description: t('tabBillsDesc'),
      icon: Receipt
    }
  ];

  const totalBills = (files.bills || []).reduce(
    (total, bill) => total + Number(bill.amount || 0),
    0
  );

  const totalAssets =
    files.photos.length +
    files.plans.length +
    files.gallery.length +
    files.docs.length;

  const currentTab = tabs.find(tab => tab.id === activeTab);

  if (loading) {
    return (
      <div className="project-page">
        <style>{projectStyles}</style>

        <div className="project-loading">
          <div className="project-loader"></div>
          <p>{t('loadingProjects')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="project-page">
      <style>{projectStyles}</style>

      {/* PAGE HEADER */}
      <div className="project-page-header">
        <div>
          <div className="project-eyebrow">
            <span className="project-eyebrow-line"></span>
            {t('constructionWorkspace')}
          </div>

          <h1>{t('projectManagementTitle')}</h1>

          <p>{t('projectManagementSub')}</p>
        </div>

        <button
          className="project-primary-btn"
          onClick={() => setShowCreateProjectModal(true)}
        >
          <Plus size={17} />
          {t('createProject')}
        </button>
      </div>

      {/* PROJECT EMPTY STATE */}
      {projects.length === 0 ? (
        <div className="project-empty-workspace">
          <div className="project-empty-icon">
            <Building2 size={34} />
          </div>

          <h2>{t('noProjectsYet')}</h2>

          <p>{t('noProjectsDesc')}</p>

          <button
            className="project-primary-btn"
            onClick={() => setShowCreateProjectModal(true)}
          >
            <Plus size={17} />
            {t('createFirstProject')}
          </button>
        </div>
      ) : (
        <>
          {/* PROJECT SELECTOR */}
          <div className="project-selector-panel">
            <div className="project-selector-left">
              <div className="project-selector-icon">
                <FolderKanban size={21} />
              </div>

              <div className="project-selector-info">
                <span>{t('activeWorkspace')}</span>

                <select
                  value={selectedProject?._id || ''}
                  onChange={e => {
                    const project = projects.find(
                      p => p._id === e.target.value
                    );

                    setSelectedProject(project || null);
                  }}
                >
                  {projects.map(project => (
                    <option key={project._id} value={project._id}>
                      {project.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="project-selector-actions">
              <button
                className="project-secondary-btn"
                onClick={() => setShowCreateProjectModal(true)}
              >
                <Plus size={15} />
                {t('addProject')}
              </button>

              <button
                className="project-delete-btn"
                onClick={() => handleDeleteProject(selectedProject?._id)}
                disabled={!selectedProject}
              >
                <Trash2 size={15} />
                {t('delete')}
              </button>
            </div>
          </div>

          {selectedProject && (
            <>
              {/* PROJECT HERO */}
              <div className="project-hero">
                <div className="project-hero-decoration"></div>

                <div className="project-hero-content">
                  <div className="project-hero-top">
                    <div className="project-status">
                      <span className="project-status-dot"></span>
                      {getStatusLabel(selectedProject.status)}
                    </div>

                    <span className="project-start-date">
                      <Calendar size={13} />
                      {t('started')} {selectedProject.startDate || t('na')}
                    </span>
                  </div>

                  <h2>{selectedProject.name}</h2>

                  <div className="project-hero-meta">
                    <span>
                      <MapPin size={15} />
                      {selectedProject.location || t('locationNotSpecified')}
                    </span>

                    <span>
                      <BriefcaseBusiness size={15} />
                      {selectedProject.client || t('clientNotSpecified')}
                    </span>
                  </div>
                </div>

                <div className="project-hero-mark">
                  <HardHat size={62} strokeWidth={1.1} />
                  <span>{t('projectBadge')}</span>
                </div>
              </div>

              {/* PROJECT STATISTICS */}
              <div className="project-stat-grid">
                <div className="project-stat-card">
                  <div className="project-stat-icon bronze">
                    <FolderKanban size={20} />
                  </div>

                  <div>
                    <span>{t('projectAssets')}</span>
                    <strong>{totalAssets}</strong>
                    <small>{t('uploadedFiles')}</small>
                  </div>
                </div>

                <div className="project-stat-card">
                  <div className="project-stat-icon sand">
                    <ImageIcon size={20} />
                  </div>

                  <div>
                    <span>{t('sitePhotosStat')}</span>
                    <strong>{files.photos.length}</strong>
                    <small>{t('progressImages')}</small>
                  </div>
                </div>

                <div className="project-stat-card">
                  <div className="project-stat-icon dark">
                    <FileText size={20} />
                  </div>

                  <div>
                    <span>{t('documentsStat')}</span>
                    <strong>{files.docs.length}</strong>
                    <small>{t('projectRecords')}</small>
                  </div>
                </div>

                <div className="project-stat-card">
                  <div className="project-stat-icon expense">
                    <IndianRupee size={20} />
                  </div>

                  <div>
                    <span>{t('materialExpenses')}</span>
                    <strong>₹{totalBills.toLocaleString(locale)}</strong>
                    <small>
                      {files.bills.length} {t('billsRecorded')}
                    </small>
                  </div>
                </div>
              </div>

              {/* SECTION HEADING */}
              <div className="project-section-heading">
                <div>
                  <div className="project-eyebrow">
                    <span className="project-eyebrow-line"></span>
                    {t('projectResources')}
                  </div>

                  <h3>{t('projectFilesRecords')}</h3>

                  <p>{t('projectFilesRecordsSub')}</p>
                </div>

                <button
                  className="project-primary-btn"
                  onClick={() => setShowUploadModal(true)}
                >
                  <Upload size={16} />
                  {activeTab === 'bills'
                    ? t('uploadMaterialBill')
                    : activeTab === 'docs'
                      ? t('uploadDocument')
                      : t('uploadAsset')}
                </button>
              </div>

              {/* NAVIGATION TABS */}
              <div className="project-tabs">
                {tabs.map(tab => {
                  const Icon = tab.icon;
                  const count = files[tab.id]?.length || 0;
                  const isActive = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      className={`project-tab ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <div className="project-tab-icon">
                        <Icon size={18} />
                      </div>

                      <div className="project-tab-text">
                        <strong>{tab.label}</strong>
                        <span>{tab.description}</span>
                      </div>

                      <span className="project-tab-count">{count}</span>
                    </button>
                  );
                })}
              </div>

              {/* IMAGE / PLAN / GALLERY CONTENT */}
              {['photos', 'plans', 'gallery'].includes(activeTab) && (
                <div className="project-content-area">
                  <div className="project-content-heading">
                    <div>
                      <h3>{currentTab?.label}</h3>
                      <p>{currentTab?.description}</p>
                    </div>

                    <span className="project-record-count">
                      {files[activeTab].length} {t('filesCount')}
                    </span>
                  </div>

                  {files[activeTab].length === 0 ? (
                    <div className="project-empty-content">
                      <div className="project-empty-icon">
                        <ImageIcon size={30} />
                      </div>

                      <h3>{t('noFilesUploadedYet')}</h3>

                      <p>
                        {t('uploadFirstFilePrompt').replace(
                          '{type}',
                          (currentTab?.label || '').toLowerCase()
                        )}
                      </p>

                      <button
                        className="project-secondary-btn"
                        onClick={() => setShowUploadModal(true)}
                      >
                        <Plus size={15} />
                        {t('uploadFirstFile')}
                      </button>
                    </div>
                  ) : (
                    <div className="project-asset-grid">
                      {files[activeTab].map(item => (
                        <div
                          key={item.id || item._id}
                          className="project-asset-card"
                        >
                          <div className="project-asset-image">
                            <img
                              src={item.url}
                              alt={item.title || t('untitledAsset')}
                            />

                            <div className="project-asset-overlay">
                              <button
                                onClick={() => setSelectedImageModal(item.url)}
                                title={t('preview')}
                              >
                                <Eye size={17} />
                              </button>

                              <button
                                className="danger"
                                onClick={() =>
                                  handleDeleteItem(
                                    item.id || item._id,
                                    activeTab
                                  )
                                }
                                title={t('delete')}
                              >
                                <Trash2 size={17} />
                              </button>
                            </div>

                            <span className="project-asset-type">
                              {activeTab === 'plans'
                                ? t('floorPlanBadge')
                                : activeTab === 'gallery'
                                  ? t('galleryBadge')
                                  : t('sitePhotoBadge')}
                            </span>
                          </div>

                          <div className="project-asset-info">
                            <h4>{item.title || t('untitledAsset')}</h4>

                            <span>
                              <Calendar size={12} />
                              {t('uploadedOn')} {item.date || t('na')}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* DOCUMENTS */}
              {activeTab === 'docs' && (
                <div className="project-content-area">
                  <div className="project-content-heading">
                    <div>
                      <h3>{t('engineeringDocuments')}</h3>
                      <p>{t('engineeringDocumentsSub')}</p>
                    </div>

                    <span className="project-record-count">
                      {files.docs.length} {t('documentsCount')}
                    </span>
                  </div>

                  {files.docs.length === 0 ? (
                    <div className="project-empty-content">
                      <div className="project-empty-icon">
                        <FileText size={30} />
                      </div>

                      <h3>{t('noDocumentsAvailable')}</h3>

                      <p>{t('noDocumentsDesc')}</p>

                      <button
                        className="project-secondary-btn"
                        onClick={() => setShowUploadModal(true)}
                      >
                        <Upload size={15} />
                        {t('uploadDocument')}
                      </button>
                    </div>
                  ) : (
                    <div className="project-document-list">
                      {files.docs.map(doc => (
                        <div
                          key={doc.id || doc._id}
                          className="project-document-row"
                        >
                          <div className="project-document-icon">
                            <FileText size={22} />
                          </div>

                          <div className="project-document-info">
                            <h4>{doc.title}</h4>

                            <p>
                              {doc.type || t('fileUnavailable')}
                              <span>•</span>
                              {doc.size || t('fileSizeUnavailable')}
                              <span>•</span>
                              {t('uploadedOn')} {doc.date || t('na')}
                            </p>
                          </div>

                          <div className="project-document-actions">
                            <a
                              href={doc.url}
                              target="_blank"
                              rel="noreferrer"
                              className="project-view-btn"
                            >
                              <Eye size={15} />
                              {t('view')}
                            </a>

                            <button
                              className="project-icon-delete"
                              onClick={() =>
                                handleDeleteItem(doc.id || doc._id, 'docs')
                              }
                              title={t('deleteDocument')}
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* MATERIAL BILLS */}
              {activeTab === 'bills' && (
                <div className="project-content-area">
                  <div className="project-bill-summary">
                    <div>
                      <div className="project-eyebrow">
                        <span className="project-eyebrow-line"></span>
                        {t('expenseTracking')}
                      </div>

                      <h3>{t('materialPurchaseRecords')}</h3>

                      <p>{t('materialPurchaseRecordsSub')}</p>
                    </div>

                    <div className="project-expense-total">
                      <span>{t('totalRecordedExpense')}</span>
                      <strong>₹{totalBills.toLocaleString(locale)}</strong>
                      <small>
                        {files.bills.length} {t('invoicesCount')}
                      </small>
                    </div>
                  </div>

                  <div className="project-table-wrapper">
                    <table className="project-table">
                      <thead>
                        <tr>
                          <th>{t('invoiceNumber')}</th>
                          <th>{t('vendor')}</th>
                          <th>{t('category')}</th>
                          <th>{t('date')}</th>
                          <th className="text-right">{t('amountCol')}</th>
                          <th className="text-center">{t('actionCol')}</th>
                        </tr>
                      </thead>

                      <tbody>
                        {files.bills.length === 0 ? (
                          <tr>
                            <td colSpan="6">
                              <div className="project-table-empty">
                                <Receipt size={28} />
                                <strong>{t('noMaterialBillsRecorded')}</strong>
                                <span>{t('uploadedBillsAppearHere')}</span>
                              </div>
                            </td>
                          </tr>
                        ) : (
                          files.bills.map(bill => (
                            <tr key={bill.id || bill._id}>
                              <td>
                                <span className="project-invoice-number">
                                  {bill.billNo || t('na')}
                                </span>
                              </td>

                              <td className="project-vendor-name">
                                {bill.vendor || t('generalVendor')}
                              </td>

                              <td>
                                <span className="project-category-tag">
                                  {getCategoryLabel(bill.category)}
                                </span>
                              </td>

                              <td className="project-date-cell">
                                {bill.date || t('na')}
                              </td>

                              <td className="project-amount-cell">
                                ₹
                                {Number(bill.amount || 0).toLocaleString(
                                  locale
                                )}
                              </td>

                              <td className="text-center">
                                <button
                                  className="project-icon-delete"
                                  onClick={() =>
                                    handleDeleteItem(bill.id || bill._id, 'bills')
                                  }
                                  title={t('deleteBill')}
                                >
                                  <Trash2 size={16} />
                                </button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}

      {/* CREATE PROJECT MODAL */}
      {showCreateProjectModal && (
        <div
          className="project-modal-backdrop"
          onClick={() => setShowCreateProjectModal(false)}
        >
          <div
            className="project-modal"
            onClick={e => e.stopPropagation()}
          >
            <div className="project-modal-header">
              <div className="project-modal-heading-icon">
                <FolderKanban size={21} />
              </div>

              <div>
                <h3>{t('createNewProjectTitle')}</h3>
                <p>{t('createNewProjectSub')}</p>
              </div>

              <button
                className="project-modal-close"
                onClick={() => setShowCreateProjectModal(false)}
              >
                <X size={19} />
              </button>
            </div>

            <form onSubmit={handleCreateProject}>
              <div className="project-form-group">
                <label>{t('projectNameLabel')}</label>

                <input
                  type="text"
                  required
                  placeholder={t('projectNamePlaceholder')}
                  value={newProjectName}
                  onChange={e => setNewProjectName(e.target.value)}
                />
              </div>

              <div className="project-form-group">
                <label>{t('siteLocationLabel')}</label>

                <input
                  type="text"
                  placeholder={t('siteLocationSample')}
                  value={newLocation}
                  onChange={e => setNewLocation(e.target.value)}
                />
              </div>

              <div className="project-form-group">
                <label>{t('clientNameLabel')}</label>

                <input
                  type="text"
                  placeholder={t('clientNameSample')}
                  value={newClient}
                  onChange={e => setNewClient(e.target.value)}
                />
              </div>

              <div className="project-modal-footer">
                <button
                  type="button"
                  className="project-cancel-btn"
                  onClick={() => setShowCreateProjectModal(false)}
                >
                  {t('cancel')}
                </button>

                <button
                  type="submit"
                  className="project-primary-btn"
                  disabled={saving}
                >
                  <Plus size={16} />
                  {saving ? t('creating') : t('createProject')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* UPLOAD MODAL */}
      {showUploadModal && (
        <div
          className="project-modal-backdrop"
          onClick={() => {
            setShowUploadModal(false);
            resetUploadForm();
          }}
        >
          <div
            className="project-modal"
            onClick={e => e.stopPropagation()}
          >
            <div className="project-modal-header">
              <div className="project-modal-heading-icon">
                {activeTab === 'bills' ? (
                  <Receipt size={21} />
                ) : (
                  <Upload size={21} />
                )}
              </div>

              <div>
                <h3>
                  {activeTab === 'bills'
                    ? t('uploadMaterialBill')
                    : activeTab === 'docs'
                      ? t('uploadSiteDocument')
                      : `${t('uploadAsset')} — ${currentTab?.label || ''}`}
                </h3>

                <p>
                  {t('uploadRecordTo').replace(
                    '{project}',
                    selectedProject?.name || ''
                  )}
                </p>
              </div>

              <button
                className="project-modal-close"
                onClick={() => {
                  setShowUploadModal(false);
                  resetUploadForm();
                }}
              >
                <X size={19} />
              </button>
            </div>

            <form onSubmit={handleUploadSubmit}>
              {activeTab === 'bills' ? (
                <>
                  <div className="project-form-group">
                    <label>{t('vendorSupplierLabel')}</label>

                    <input
                      type="text"
                      required
                      placeholder={t('vendorSample')}
                      value={uploadVendor}
                      onChange={e => setUploadVendor(e.target.value)}
                    />
                  </div>

                  <div className="project-form-group">
                    <label>{t('materialCategoryLabel')}</label>

                    <select
                      value={uploadCategory}
                      onChange={e => setUploadCategory(e.target.value)}
                    >
                      <option value="Raw Materials">
                        {t('catRawMaterials')}
                      </option>

                      <option value="Electrical & Plumbing">
                        {t('catElectricalPlumbing')}
                      </option>

                      <option value="Finishing & Tiles">
                        {t('catFinishingTiles')}
                      </option>

                      <option value="Labor & Equipment">
                        {t('catLaborEquipment')}
                      </option>
                    </select>
                  </div>

                  <div className="project-form-group">
                    <label>{t('billAmountLabel')}</label>

                    <input
                      type="number"
                      required
                      min="1"
                      placeholder="50000"
                      value={uploadAmount}
                      onChange={e => setUploadAmount(e.target.value)}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="project-form-group">
                    <label>{t('assetTitleLabel')}</label>

                    <input
                      type="text"
                      required
                      placeholder={t('assetTitleSample')}
                      value={uploadTitle}
                      onChange={e => setUploadTitle(e.target.value)}
                    />
                  </div>

                  <div className="project-form-group">
                    <label>{t('selectFileFromDevice')}</label>

                    <div className="project-file-upload">
                      <FileImage size={25} />

                      <strong>
                        {uploadFilePreview
                          ? t('fileSelectedSuccess')
                          : t('chooseFileToUpload')}
                      </strong>

                      <span>
                        {activeTab === 'docs'
                          ? t('docFileTypes')
                          : t('imageFileTypes')}
                      </span>

                      <input
                        type="file"
                        accept={
                          activeTab === 'docs' ? '.pdf,.doc,.docx' : 'image/*'
                        }
                        onChange={handleFileChange}
                      />
                    </div>

                    {uploadFilePreview && activeTab !== 'docs' && (
                      <div className="project-upload-preview">
                        <img
                          src={uploadFilePreview}
                          alt={t('uploadPreviewAlt')}
                        />
                        <span>{t('previewReady')}</span>
                      </div>
                    )}

                    {uploadFilePreview && activeTab === 'docs' && (
                      <p className="project-upload-success">
                        {t('fileReadyToSave')}
                      </p>
                    )}
                  </div>
                </>
              )}

              <div className="project-modal-footer">
                <button
                  type="button"
                  className="project-cancel-btn"
                  onClick={() => {
                    setShowUploadModal(false);
                    resetUploadForm();
                  }}
                >
                  {t('cancel')}
                </button>

                <button
                  type="submit"
                  className="project-primary-btn"
                  disabled={saving}
                >
                  <Upload size={16} />
                  {saving ? t('saving') : t('uploadAndSave')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* IMAGE PREVIEW MODAL */}
      {selectedImageModal && (
        <div
          className="project-lightbox"
          onClick={() => setSelectedImageModal(null)}
        >
          <button
            className="project-lightbox-close"
            onClick={() => setSelectedImageModal(null)}
          >
            <X size={23} />
          </button>

          <img
            src={selectedImageModal}
            alt={t('projectPreviewAlt')}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

const projectStyles = `
.project-page {
  --p-dark: #211b17;
  --p-dark-2: #30251e;
  --p-bronze: #a45e30;
  --p-bronze-light: #c58b60;
  --p-beige: #e8c29f;
  --p-bg: #f5f1eb;
  --p-card: #fffdfa;
  --p-border: #e8dfd3;
  --p-text: #29231e;
  --p-muted: #8a8076;
  min-height: 100%;
  padding: 28px;
  background: var(--p-bg);
  color: var(--p-text);
  font-family: inherit;
}

.project-page * {
  box-sizing: border-box;
}

.project-page button,
.project-page input,
.project-page select {
  font: inherit;
}

.project-page button {
  cursor: pointer;
}

.project-page button:disabled {
  opacity: .6;
  cursor: not-allowed;
}

.project-page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 26px;
}

.project-eyebrow {
  display: flex;
  align-items: center;
  gap: 9px;
  color: var(--p-bronze);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.7px;
  margin-bottom: 9px;
}

.project-eyebrow-line {
  display: inline-block;
  width: 23px;
  height: 2px;
  background: var(--p-bronze);
}

.project-page-header h1 {
  color: var(--p-dark);
  font-size: 27px;
  font-weight: 800;
  letter-spacing: -.8px;
  margin: 0;
}

.project-page-header p {
  margin: 7px 0 0;
  color: var(--p-muted);
  font-size: 12px;
}

.project-primary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 12px 17px;
  border: 1px solid var(--p-bronze);
  border-radius: 10px;
  background: var(--p-bronze);
  color: white;
  font-size: 12px;
  font-weight: 750;
  transition: .2s ease;
  box-shadow: 0 5px 13px rgba(164,94,48,.13);
}

.project-primary-btn:hover {
  background: var(--p-dark);
  border-color: var(--p-dark);
  transform: translateY(-1px);
}

.project-secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 14px;
  border: 1px solid var(--p-border);
  border-radius: 9px;
  background: #f8f4ee;
  color: var(--p-dark);
  font-size: 11px;
  font-weight: 750;
  transition: .2s;
}

.project-secondary-btn:hover {
  background: var(--p-dark);
  color: white;
  border-color: var(--p-dark);
}

.project-delete-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 10px 13px;
  border: 1px solid #ead5ce;
  border-radius: 9px;
  color: #a34b3f;
  background: #fff8f5;
  font-size: 11px;
  font-weight: 750;
}

.project-delete-btn:hover {
  background: #a34b3f;
  color: white;
}

.project-selector-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 15px 18px;
  background: var(--p-card);
  border: 1px solid var(--p-border);
  border-radius: 14px;
  margin-bottom: 18px;
  box-shadow: 0 3px 12px rgba(50,35,22,.025);
}

.project-selector-left {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.project-selector-icon {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 11px;
  background: #f1e5d8;
  color: var(--p-bronze);
}

.project-selector-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.project-selector-info > span {
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1.3px;
  color: var(--p-muted);
}

.project-selector-info select {
  max-width: 340px;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--p-dark);
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
}

.project-selector-actions {
  display: flex;
  align-items: center;
  gap: 9px;
}

.project-hero {
  position: relative;
  overflow: hidden;
  min-height: 185px;
  padding: 25px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(115deg, #211b17 0%, #30251e 65%, #51402f 100%);
  border-radius: 16px;
  color: white;
  margin-bottom: 18px;
  box-shadow: 0 8px 22px rgba(33,27,23,.12);
}

.project-hero-decoration {
  position: absolute;
  width: 290px;
  height: 290px;
  right: 90px;
  top: -175px;
  border: 1px solid rgba(232,194,159,.13);
  border-radius: 50%;
  box-shadow: 0 0 0 32px rgba(232,194,159,.025),
              0 0 0 65px rgba(232,194,159,.025);
}

.project-hero-content {
  position: relative;
  z-index: 1;
}

.project-hero-top {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 14px;
}

.project-status {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 10px;
  border: 1px solid rgba(197,139,96,.35);
  border-radius: 30px;
  background: rgba(197,139,96,.13);
  color: #e8c29f;
  font-size: 10px;
  font-weight: 750;
}

.project-status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #c58b60;
}

.project-start-date {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #c8b9aa;
  font-size: 10px;
}

.project-hero h2 {
  margin: 0 0 12px;
  color: #fffaf4;
  font-size: 25px;
  font-weight: 800;
  letter-spacing: -.6px;
}

.project-hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 19px;
}

.project-hero-meta span {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #d2c4b7;
  font-size: 11px;
}

.project-hero-meta svg {
  color: var(--p-bronze-light);
}

.project-hero-mark {
  position: relative;
  z-index: 1;
  width: 112px;
  height: 112px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: 1px solid rgba(232,194,159,.22);
  border-radius: 18px;
  background: rgba(255,255,255,.045);
  color: #d6a77f;
}

.project-hero-mark span {
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 2px;
}

.project-stat-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 13px;
  margin-bottom: 30px;
}

.project-stat-card {
  display: flex;
  align-items: center;
  gap: 13px;
  min-width: 0;
  padding: 17px 15px;
  border: 1px solid var(--p-border);
  border-radius: 13px;
  background: var(--p-card);
  box-shadow: 0 3px 10px rgba(50,35,22,.025);
}

.project-stat-icon {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 11px;
}

.project-stat-icon.bronze {
  background: #f1e5d8;
  color: #a45e30;
}

.project-stat-icon.sand {
  background: #f2eadc;
  color: #92734d;
}

.project-stat-icon.dark {
  background: #eae5df;
  color: #514333;
}

.project-stat-icon.expense {
  background: #f5e9e0;
  color: #a45e30;
}

.project-stat-card > div:last-child {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.project-stat-card span {
  color: var(--p-muted);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .7px;
}

.project-stat-card strong {
  overflow: hidden;
  color: var(--p-dark);
  font-size: 19px;
  font-weight: 850;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.project-stat-card small {
  color: #a49a8f;
  font-size: 10px;
}

.project-section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 15px;
  margin-bottom: 16px;
}

.project-section-heading h3 {
  margin: 0;
  color: var(--p-dark);
  font-size: 19px;
  font-weight: 850;
}

.project-section-heading p {
  margin: 6px 0 0;
  color: var(--p-muted);
  font-size: 11px;
}

.project-tabs {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 9px;
  margin-bottom: 17px;
}

.project-tab {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 12px 10px;
  border: 1px solid var(--p-border);
  border-radius: 11px;
  background: var(--p-card);
  text-align: left;
  transition: .2s;
}

.project-tab:hover {
  border-color: #cba27f;
  transform: translateY(-1px);
}

.project-tab.active {
  border-color: var(--p-bronze);
  background: #2b211b;
  box-shadow: 0 5px 13px rgba(33,27,23,.12);
}

.project-tab-icon {
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 9px;
  background: #f2e9df;
  color: var(--p-bronze);
}

.project-tab.active .project-tab-icon {
  background: rgba(197,139,96,.16);
  color: #e8c29f;
}

.project-tab-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.project-tab-text strong {
  overflow: hidden;
  color: var(--p-dark);
  font-size: 10px;
  font-weight: 800;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.project-tab-text span {
  overflow: hidden;
  color: var(--p-muted);
  font-size: 9px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.project-tab.active .project-tab-text strong {
  color: #fff6ed;
}

.project-tab.active .project-tab-text span {
  color: #c4b3a3;
}

.project-tab-count {
  flex-shrink: 0;
  margin-left: auto;
  padding: 4px 6px;
  border-radius: 6px;
  background: #f1e9e0;
  color: var(--p-bronze);
  font-size: 9px;
  font-weight: 800;
}

.project-tab.active .project-tab-count {
  background: rgba(197,139,96,.18);
  color: #e8c29f;
}

.project-content-area {
  padding: 20px;
  border: 1px solid var(--p-border);
  border-radius: 14px;
  background: var(--p-card);
  box-shadow: 0 3px 12px rgba(50,35,22,.025);
}

.project-content-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding-bottom: 17px;
  border-bottom: 1px solid #eee7de;
  margin-bottom: 18px;
}

.project-content-heading h3 {
  margin: 0;
  color: var(--p-dark);
  font-size: 15px;
  font-weight: 850;
}

.project-content-heading p {
  margin: 5px 0 0;
  color: var(--p-muted);
  font-size: 10px;
}

.project-record-count {
  padding: 7px 10px;
  border-radius: 7px;
  background: #f2e8dd;
  color: var(--p-bronze);
  font-size: 9px;
  font-weight: 850;
  letter-spacing: .7px;
}

.project-asset-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 17px;
}

.project-asset-card {
  overflow: hidden;
  border: 1px solid var(--p-border);
  border-radius: 12px;
  background: #fff;
  transition: .2s;
}

.project-asset-card:hover {
  border-color: #cba27f;
  transform: translateY(-3px);
  box-shadow: 0 9px 20px rgba(50,35,22,.08);
}

.project-asset-image {
  position: relative;
  height: 190px;
  overflow: hidden;
  background: #eee7df;
}

.project-asset-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .35s;
}

.project-asset-card:hover .project-asset-image img {
  transform: scale(1.045);
}

.project-asset-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
  background: rgba(25,19,15,.43);
  opacity: 0;
  transition: .2s;
}

.project-asset-card:hover .project-asset-overlay {
  opacity: 1;
}

.project-asset-overlay button {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 10px;
  background: rgba(255,255,255,.94);
  color: var(--p-dark);
}

.project-asset-overlay button:hover {
  background: var(--p-bronze);
  color: white;
}

.project-asset-overlay button.danger:hover {
  background: #a34b3f;
}

.project-asset-type {
  position: absolute;
  bottom: 10px;
  left: 10px;
  padding: 5px 8px;
  border-radius: 5px;
  background: rgba(33,27,23,.82);
  color: #f5e5d5;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 1px;
}

.project-asset-info {
  padding: 13px;
}

.project-asset-info h4 {
  overflow: hidden;
  margin: 0 0 9px;
  color: var(--p-dark);
  font-size: 12px;
  font-weight: 800;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.project-asset-info span {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--p-muted);
  font-size: 10px;
}

.project-document-list {
  display: flex;
  flex-direction: column;
}

.project-document-row {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 13px 5px;
  border-bottom: 1px solid #eee7de;
}

.project-document-row:last-child {
  border-bottom: 0;
}

.project-document-icon {
  flex-shrink: 0;
  width: 43px;
  height: 43px;
  display: grid;
  place-items: center;
  border-radius: 11px;
  background: #f2e8dd;
  color: var(--p-bronze);
}

.project-document-info {
  flex: 1;
  min-width: 0;
}

.project-document-info h4 {
  overflow: hidden;
  margin: 0 0 6px;
  color: var(--p-dark);
  font-size: 12px;
  font-weight: 800;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.project-document-info p {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 0;
  color: var(--p-muted);
  font-size: 10px;
}

.project-document-actions {
  display: flex;
  align-items: center;
  gap: 9px;
}

.project-view-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 11px;
  border: 1px solid var(--p-border);
  border-radius: 8px;
  background: #f8f4ee;
  color: var(--p-dark);
  font-size: 10px;
  font-weight: 800;
  text-decoration: none;
}

.project-view-btn:hover {
  border-color: var(--p-bronze);
  background: var(--p-bronze);
  color: white;
}

.project-icon-delete {
  width: 34px;
  height: 34px;
  display: inline-grid;
  place-items: center;
  border: 1px solid #f0dfda;
  border-radius: 8px;
  background: #fff8f5;
  color: #ae594b;
  transition: .2s;
}

.project-icon-delete:hover {
  background: #ae594b;
  color: white;
}

.project-bill-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  padding-bottom: 18px;
  border-bottom: 1px solid #eee7de;
  margin-bottom: 17px;
}

.project-bill-summary h3 {
  margin: 0;
  color: var(--p-dark);
  font-size: 16px;
  font-weight: 850;
}

.project-bill-summary p {
  margin: 6px 0 0;
  color: var(--p-muted);
  font-size: 10px;
}

.project-expense-total {
  min-width: 185px;
  padding: 13px 16px;
  border: 1px solid #e7d3c0;
  border-radius: 11px;
  background: #f5ece2;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.project-expense-total span {
  color: #98714e;
  font-size: 8px;
  font-weight: 850;
  letter-spacing: .9px;
}

.project-expense-total strong {
  color: #784421;
  font-size: 21px;
  font-weight: 900;
}

.project-expense-total small {
  color: #987e68;
  font-size: 9px;
}

.project-table-wrapper {
  overflow-x: auto;
}

.project-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  white-space: nowrap;
}

.project-table th {
  padding: 13px 12px;
  background: #f7f3ed;
  color: #85786a;
  font-size: 9px;
  font-weight: 850;
  letter-spacing: .7px;
  text-transform: uppercase;
}

.project-table td {
  padding: 14px 12px;
  border-bottom: 1px solid #eee7de;
  color: var(--p-text);
  font-size: 11px;
}

.project-table tbody tr:hover {
  background: #fcf9f5;
}

.project-invoice-number {
  color: var(--p-bronze);
  font-family: monospace;
  font-size: 11px;
  font-weight: 850;
}

.project-vendor-name {
  font-weight: 750;
}

.project-category-tag {
  display: inline-block;
  padding: 6px 9px;
  border-radius: 6px;
  background: #f2eae0;
  color: #806344;
  font-size: 9px;
  font-weight: 750;
}

.project-date-cell {
  color: var(--p-muted) !important;
}

.project-amount-cell {
  color: var(--p-dark) !important;
  text-align: right;
  font-size: 12px !important;
  font-weight: 850;
}

.project-table .text-right {
  text-align: right;
}

.project-table .text-center {
  text-align: center;
}

.project-table-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  padding: 35px 10px;
  color: #a99c8e;
}

.project-table-empty strong {
  color: var(--p-dark);
  font-size: 12px;
}

.project-table-empty span {
  font-size: 10px;
}

.project-empty-workspace,
.project-empty-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 20px;
  border: 1px dashed #d9c9b7;
  border-radius: 14px;
  background: rgba(255,253,250,.8);
  text-align: center;
}

.project-empty-workspace {
  min-height: 390px;
}

.project-empty-content {
  padding: 42px 20px;
}

.project-empty-icon {
  width: 65px;
  height: 65px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  background: #f1e5d8;
  color: var(--p-bronze);
  margin-bottom: 14px;
}

.project-empty-workspace h2,
.project-empty-content h3 {
  margin: 0;
  color: var(--p-dark);
  font-size: 16px;
  font-weight: 850;
}

.project-empty-workspace p,
.project-empty-content p {
  max-width: 380px;
  margin: 8px 0 17px;
  color: var(--p-muted);
  font-size: 11px;
  line-height: 1.7;
}

.project-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  background: rgba(25,19,15,.66);
  backdrop-filter: blur(5px);
}

.project-modal {
  width: 100%;
  max-width: 490px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 23px;
  border: 1px solid #e8dfd3;
  border-radius: 17px;
  background: #fffdfa;
  box-shadow: 0 22px 65px rgba(0,0,0,.25);
  animation: projectModalIn .2s ease-out;
}

@keyframes projectModalIn {
  from {
    opacity: 0;
    transform: translateY(10px) scale(.99);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.project-modal-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 17px;
  border-bottom: 1px solid #eee7de;
  margin-bottom: 19px;
}

.project-modal-heading-icon {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 11px;
  background: #f1e5d8;
  color: var(--p-bronze);
}

.project-modal-header > div:nth-child(2) {
  flex: 1;
}

.project-modal-header h3 {
  margin: 0;
  color: var(--p-dark);
  font-size: 16px;
  font-weight: 850;
}

.project-modal-header p {
  margin: 5px 0 0;
  color: var(--p-muted);
  font-size: 10px;
}

.project-modal-close {
  width: 33px;
  height: 33px;
  display: grid;
  place-items: center;
  border: 1px solid var(--p-border);
  border-radius: 9px;
  background: #f8f4ee;
  color: var(--p-muted);
}

.project-modal-close:hover {
  background: var(--p-dark);
  color: white;
}

.project-form-group {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 15px;
}

.project-form-group label {
  color: #74685c;
  font-size: 9px;
  font-weight: 850;
  letter-spacing: .8px;
}

.project-form-group input,
.project-form-group select {
  width: 100%;
  min-height: 42px;
  padding: 10px 12px;
  border: 1px solid #e4dbd0;
  border-radius: 9px;
  outline: none;
  background: #fff;
  color: var(--p-dark);
  font-size: 11px;
  transition: .2s;
}

.project-form-group input:focus,
.project-form-group select:focus {
  border-color: var(--p-bronze);
  box-shadow: 0 0 0 3px rgba(164,94,48,.09);
}

.project-file-upload {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 25px 15px;
  border: 1px dashed #cbb49c;
  border-radius: 11px;
  background: #faf6f0;
  color: var(--p-bronze);
  text-align: center;
}

.project-file-upload strong {
  color: var(--p-dark);
  font-size: 11px;
}

.project-file-upload span {
  color: var(--p-muted);
  font-size: 9px;
}

.project-file-upload input {
  width: 100%;
  min-height: auto;
  padding: 8px;
  border: 0;
  background: transparent;
  font-size: 10px;
}

.project-upload-preview {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  color: #4c805d;
  font-size: 10px;
  font-weight: 750;
}

.project-upload-preview img {
  width: 48px;
  height: 42px;
  object-fit: cover;
  border-radius: 7px;
}

.project-upload-success {
  color: #4c805d;
  font-size: 10px;
  font-weight: 750;
}

.project-modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 9px;
  padding-top: 17px;
  border-top: 1px solid #eee7de;
  margin-top: 20px;
}

.project-cancel-btn {
  padding: 10px 15px;
  border: 1px solid var(--p-border);
  border-radius: 9px;
  background: white;
  color: #786e63;
  font-size: 11px;
  font-weight: 750;
}

.project-cancel-btn:hover {
  background: #f5f1eb;
}

.project-lightbox {
  position: fixed;
  inset: 0;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: rgba(15,12,10,.94);
  backdrop-filter: blur(5px);
}

.project-lightbox img {
  max-width: 90%;
  max-height: 85vh;
  object-fit: contain;
  border: 1px solid rgba(255,255,255,.2);
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0,0,0,.4);
}

.project-lightbox-close {
  position: absolute;
  top: 22px;
  right: 25px;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255,255,255,.2);
  border-radius: 50%;
  background: rgba(255,255,255,.1);
  color: white;
}

.project-lightbox-close:hover {
  background: var(--p-bronze);
}

.project-loading {
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  color: var(--p-muted);
  font-size: 12px;
}

.project-loader {
  width: 35px;
  height: 35px;
  border: 3px solid #e8dfd3;
  border-top-color: var(--p-bronze);
  border-radius: 50%;
  animation: projectSpin .8s linear infinite;
}

@keyframes projectSpin {
  to { transform: rotate(360deg); }
}

@media (max-width: 1100px) {
  .project-tabs {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .project-stat-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .project-asset-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .project-page {
    padding: 16px;
  }

  .project-page-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .project-page-header h1 {
    font-size: 23px;
  }

  .project-selector-panel {
    align-items: stretch;
    flex-direction: column;
  }

  .project-selector-actions {
    width: 100%;
  }

  .project-selector-actions button {
    flex: 1;
    justify-content: center;
  }

  .project-selector-info select {
    max-width: 230px;
  }

  .project-hero {
    min-height: 165px;
    padding: 20px;
  }

  .project-hero h2 {
    font-size: 20px;
  }

  .project-hero-mark {
    width: 75px;
    height: 75px;
  }

  .project-hero-mark svg {
    width: 42px;
  }

  .project-hero-meta {
    flex-direction: column;
    gap: 8px;
  }

  .project-stat-grid {
    gap: 9px;
  }

  .project-stat-card {
    padding: 12px 10px;
    gap: 9px;
  }

  .project-stat-icon {
    width: 34px;
    height: 34px;
  }

  .project-stat-card strong {
    font-size: 16px;
  }

  .project-stat-card span {
    font-size: 8px;
  }

  .project-section-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .project-tabs {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .project-content-area {
    padding: 14px;
  }

  .project-asset-grid {
    grid-template-columns: 1fr;
  }

  .project-asset-image {
    height: 210px;
  }

  .project-bill-summary {
    align-items: flex-start;
    flex-direction: column;
  }

  .project-expense-total {
    width: 100%;
  }

  .project-document-row {
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .project-document-info {
    width: calc(100% - 60px);
  }

  .project-document-actions {
    width: 100%;
    justify-content: flex-end;
  }

  .project-modal {
    padding: 17px;
  }
}

@media (max-width: 420px) {
  .project-tabs {
    grid-template-columns: 1fr;
  }

  .project-stat-grid {
    grid-template-columns: 1fr 1fr;
  }

  .project-hero-mark {
    display: none;
  }

  .project-hero-top {
    gap: 8px;
  }

  .project-modal-footer {
    flex-wrap: wrap;
  }

  .project-modal-footer button {
    flex: 1;
  }
}
`;