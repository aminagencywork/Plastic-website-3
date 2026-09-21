import React, { useState, useEffect } from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { Product, ProductImage } from '../../types';
import {
  ArrowLeft,
  Save,
  UploadCloud,
  Plus,
  Trash2,
  Check,
  Star,
  Image as ImageIcon,
  Sparkles,
  Link,
  Layers
} from 'lucide-react';

interface AdminProductFormProps {
  mode: 'add' | 'edit';
}

const PRESET_PLASTIC_IMAGES = [
  { label: 'Euro Crate', url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80' },
  { label: 'Chemical Jerry Can', url: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=1000&q=80' },
  { label: 'Industrial Drum', url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80' },
  { label: 'Perforated Harvest Bin', url: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1000&q=80' },
  { label: 'Commercial Pail / Bucket', url: 'https://images.unsplash.com/photo-1595079672139-62294316e69c?auto=format&fit=crop&w=1000&q=80' },
  { label: 'Precision Technical Part', url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80' }
];

export const AdminProductForm: React.FC<AdminProductFormProps> = ({ mode }) => {
  const {
    products,
    categories,
    editingProductId,
    addProduct,
    updateProduct,
    setAdminPage,
    setEditingProductId
  } = useCatalog();

  const existingProduct = mode === 'edit' && editingProductId
    ? products.find(p => p.id === editingProductId)
    : null;

  // Form states
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [description, setDescription] = useState('');
  const [productCode, setProductCode] = useState('');
  const [material, setMaterial] = useState('');
  const [color, setColor] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [weight, setWeight] = useState('');
  const [capacity, setCapacity] = useState('');
  const [applicationsInput, setApplicationsInput] = useState('');
  const [images, setImages] = useState<ProductImage[]>([]);
  const [isFeatured, setIsFeatured] = useState(false);
  const [isPublished, setIsPublished] = useState(true);

  // New image input helper
  const [customImageUrl, setCustomImageUrl] = useState('');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    if (existingProduct) {
      setName(existingProduct.name);
      setSlug(existingProduct.slug);
      setCategoryId(existingProduct.categoryId);
      setShortDescription(existingProduct.shortDescription || '');
      setDescription(existingProduct.description || '');
      setProductCode(existingProduct.productCode || '');
      setMaterial(existingProduct.material || '');
      setColor(existingProduct.color || '');
      setDimensions(existingProduct.dimensions || '');
      setWeight(existingProduct.weight || '');
      setCapacity(existingProduct.capacity || '');
      setApplicationsInput((existingProduct.applications || []).join('\n'));
      setImages(existingProduct.images || []);
      setIsFeatured(existingProduct.isFeatured);
      setIsPublished(existingProduct.isPublished);
    } else {
      // Default category if none selected
      if (categories.length > 0) {
        setCategoryId(categories[0].id);
      }
      setMaterial('100% Virgin High-Density Polyethylene (HDPE)');
      setColor('Industrial Blue, Slate Gray');
      setImages([
        {
          id: 'img-def-1',
          imageUrl: PRESET_PLASTIC_IMAGES[0].url,
          isPrimary: true,
          altText: 'Product photo'
        }
      ]);
    }
  }, [existingProduct, categories]);

  // Auto-generate slug when name changes
  const handleNameChange = (val: string) => {
    setName(val);
    if (mode === 'add') {
      const generated = val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setSlug(generated);
    }
  };

  // Image Upload File Handler (converts to base64 data URL)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const newImg: ProductImage = {
            id: 'img-' + Date.now().toString(36) + Math.random().toString(36).substr(2, 3),
            imageUrl: event.target.result as string,
            isPrimary: images.length === 0,
            altText: name || file.name
          };
          setImages(prev => [...prev, newImg]);
        }
      };
      reader.readAsDataURL(file);
    });

    e.target.value = '';
  };

  const handleAddImageUrl = () => {
    if (!customImageUrl.trim()) return;
    const newImg: ProductImage = {
      id: 'img-' + Date.now().toString(36),
      imageUrl: customImageUrl.trim(),
      isPrimary: images.length === 0,
      altText: name || 'Product image'
    };
    setImages(prev => [...prev, newImg]);
    setCustomImageUrl('');
  };

  const handleAddPresetImage = (url: string) => {
    const newImg: ProductImage = {
      id: 'img-' + Date.now().toString(36) + Math.random().toString(36).substr(2, 2),
      imageUrl: url,
      isPrimary: images.length === 0,
      altText: name || 'Preset image'
    };
    setImages(prev => [...prev, newImg]);
  };

  const setPrimaryImage = (imgId: string) => {
    setImages(prev =>
      prev.map(img => ({
        ...img,
        isPrimary: img.id === imgId
      }))
    );
  };

  const removeImage = (imgId: string) => {
    setImages(prev => {
      const filtered = prev.filter(img => img.id !== imgId);
      if (filtered.length > 0 && !filtered.some(i => i.isPrimary)) {
        filtered[0].isPrimary = true;
      }
      return filtered;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Product Name is required.');
      return;
    }
    if (!categoryId) {
      alert('Please select a category.');
      return;
    }
    if (images.length === 0) {
      alert('Please add at least one product image.');
      return;
    }

    const appsArray = applicationsInput
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean);

    const safeSlug = slug.trim() || name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    if (mode === 'edit' && editingProductId) {
      updateProduct(editingProductId, {
        name,
        slug: safeSlug,
        categoryId,
        shortDescription,
        description,
        productCode,
        material,
        color,
        dimensions,
        weight,
        capacity,
        applications: appsArray,
        images,
        isFeatured,
        isPublished
      });
      setFeedback('Product updated successfully!');
    } else {
      addProduct({
        name,
        slug: safeSlug,
        categoryId,
        shortDescription,
        description,
        productCode: productCode || 'AP-NEW-' + Math.floor(100 + Math.random() * 900),
        material,
        color,
        dimensions,
        weight,
        capacity,
        applications: appsArray,
        images,
        isFeatured,
        isPublished
      });
      setFeedback('Product added to catalog successfully!');
    }

    setTimeout(() => {
      setFeedback('');
      setEditingProductId(null);
      setAdminPage('products');
    }, 1200);
  };

  return (
    <div className="p-6 sm:p-8 max-w-5xl mx-auto space-y-6">
      {/* Top action header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            setEditingProductId(null);
            setAdminPage('products');
          }}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Product Management</span>
        </button>

        <span className="text-xs font-mono text-slate-400">
          {mode === 'edit' ? `Editing: ${name || 'Product'}` : 'Adding New Item'}
        </span>
      </div>

      {feedback && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center gap-2 shadow-xs">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>{feedback}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Section 1: Basic Product Information */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
          <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
            1. Core Identification & Category
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Product Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => handleNameChange(e.target.value)}
                placeholder="e.g. Heavy-Duty Euro Stackable Crate 6432"
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-600 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Product URL Slug *
              </label>
              <input
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="e.g. heavy-duty-euro-crate-6432"
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-600 font-mono text-slate-700"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Product Category *
              </label>
              <select
                required
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-600 bg-white font-medium text-slate-700"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Product Code / SKU
              </label>
              <input
                type="text"
                value={productCode}
                onChange={(e) => setProductCode(e.target.value)}
                placeholder="e.g. AP-EC-6432"
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-600 font-mono text-slate-700"
              />
            </div>

            <div className="flex items-center gap-6 pt-5">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={isFeatured}
                  onChange={(e) => setIsFeatured(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                />
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                  Featured on Homepage
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={isPublished}
                  onChange={(e) => setIsPublished(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                />
                <span className="text-xs font-bold text-slate-800">
                  Published (Visible to Public)
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Section 2: Technical Specifications */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
          <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
            2. Polymer & Dimensional Specifications
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Material / Polymer Resin
              </label>
              <input
                type="text"
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
                placeholder="e.g. 100% Virgin HDPE / Food Grade PP"
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-600 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Outer Dimensions
              </label>
              <input
                type="text"
                value={dimensions}
                onChange={(e) => setDimensions(e.target.value)}
                placeholder="e.g. 600 x 400 x 320 mm"
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-600 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Tare Weight
              </label>
              <input
                type="text"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g. 2.55 kg ± 2%"
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-600 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Capacity / Load Rating
              </label>
              <input
                type="text"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                placeholder="e.g. 62 Liters / 45 kg Dynamic"
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-600 font-medium"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Standard Colors Available
              </label>
              <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder="e.g. Industrial Blue, Slate Gray, Safety Red, Custom Masterbatch"
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-600 font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Industrial Applications (Enter each application on a new line)
            </label>
            <textarea
              rows={3}
              value={applicationsInput}
              onChange={(e) => setApplicationsInput(e.target.value)}
              placeholder="Automotive parts transit&#10;Cold storage logistics&#10;Automated warehouse conveyors&#10;Distribution centers"
              className="w-full p-3 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        {/* Section 3: Descriptions */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
            3. Product Descriptions
          </h2>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Short Description (Teaser for catalog cards)
            </label>
            <input
              type="text"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              placeholder="e.g. Industrial standard solid wall storage crate with reinforced ribbed base."
              className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-600 font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Detailed Manufacturing Description
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Manufactured from virgin polymer resins with reinforced ribs to resist vertical load distortion..."
              className="w-full p-3 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        {/* Section 4: Image Management */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                4. Product Imagery Gallery *
              </h2>
              <p className="text-xs text-slate-500">
                Upload your company photos, enter image URLs, or choose sample industrial presets.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
              {images.length} Images Attached
            </span>
          </div>

          {/* Upload and URL input controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* File Upload Button */}
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-5 text-center hover:border-blue-500 transition-colors bg-slate-50/50">
              <UploadCloud className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-xs font-bold text-slate-800">
                Upload from Computer
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5 mb-3">
                PNG, JPG, WEBP formats supported
              </p>
              <label className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg text-xs font-semibold text-slate-700 cursor-pointer shadow-2xs">
                <span>Browse Files</span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* URL Input Box */}
            <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5 mb-1">
                  <Link className="w-4 h-4 text-blue-600" />
                  <span>Attach Image via URL</span>
                </div>
                <p className="text-[11px] text-slate-400 mb-2">
                  Paste public image link (Unsplash, CDN, or Cloud Storage)
                </p>
                <input
                  type="url"
                  value={customImageUrl}
                  onChange={(e) => setCustomImageUrl(e.target.value)}
                  placeholder="https://example.com/product-image.jpg"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mt-3 text-right">
                <button
                  type="button"
                  onClick={handleAddImageUrl}
                  className="px-4 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold cursor-pointer"
                >
                  Add Image URL
                </button>
              </div>
            </div>
          </div>

          {/* Quick Preset Buttons for testing convenience */}
          <div className="pt-2">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
              Quick Add Sample Industrial Images:
            </span>
            <div className="flex flex-wrap gap-2">
              {PRESET_PLASTIC_IMAGES.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleAddPresetImage(preset.url)}
                  className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-slate-100 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 transition-colors cursor-pointer"
                >
                  + {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Image Previews Strip */}
          {images.length > 0 && (
            <div className="pt-4 border-t border-slate-100">
              <label className="block text-xs font-bold text-slate-700 mb-3">
                Image Previews (Click &ldquo;Primary&rdquo; to set as the main catalog image)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {images.map((img, idx) => (
                  <div
                    key={img.id || idx}
                    className={`relative rounded-xl overflow-hidden border-2 bg-slate-100 group aspect-4/3 flex flex-col justify-between ${
                      img.isPrimary ? 'border-blue-600 ring-2 ring-blue-600/20' : 'border-slate-200'
                    }`}
                  >
                    <img
                      src={img.imageUrl}
                      alt={`Product preview ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay status badge */}
                    <div className="absolute top-2 left-2 right-2 flex justify-between items-center pointer-events-none">
                      {img.isPrimary && (
                        <span className="bg-blue-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                          PRIMARY
                        </span>
                      )}
                    </div>

                    {/* Action buttons on hover/bottom */}
                    <div className="absolute bottom-0 inset-x-0 bg-slate-950/80 backdrop-blur-xs p-1.5 flex items-center justify-between text-[11px] text-white">
                      {!img.isPrimary ? (
                        <button
                          type="button"
                          onClick={() => setPrimaryImage(img.id)}
                          className="text-blue-300 hover:text-white font-bold cursor-pointer"
                        >
                          Set Primary
                        </button>
                      ) : (
                        <span className="text-emerald-400 font-bold text-[10px]">Main Photo</span>
                      )}

                      <button
                        type="button"
                        onClick={() => removeImage(img.id)}
                        className="text-red-400 hover:text-red-300 p-1 cursor-pointer"
                        title="Remove this image"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Save Bar */}
        <div className="flex items-center justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={() => {
              setEditingProductId(null);
              setAdminPage('products');
            }}
            className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs cursor-pointer transition-colors"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-7 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs flex items-center gap-2 shadow-md transition-colors cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>{mode === 'edit' ? 'Update Product Specifications' : 'Save & Publish Product'}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
