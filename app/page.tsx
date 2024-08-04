'use client';

import React, { useState, useEffect } from 'react';
import AdBanner from '@/app/_components/AdBanner';
import EditBanner from '@/app/_components/EditBanner';
import ExpandedBanner from '@/app/_components/ExpandedBanner';

interface Banner {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

const Home: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [expandedBannerIndex, setExpandedBannerIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    const fetchBanners = async () => {
      const response = await fetch('/data/banners.json');
      const data: Banner[] = await response.json();
      setBanners(data);
    };
    fetchBanners();
  }, []);

  const handleEdit = (index: number) => {
    setEditingIndex(index);
  };

  const handleSave = (
    title: string,
    description: string,
    cta: string,
    image: string
  ) => {
    if (editingIndex !== null) {
      const updatedBanners = [...banners];
      updatedBanners[editingIndex] = {
        ...updatedBanners[editingIndex],
        title,
        description,
        cta,
        image,
      };
      setBanners(updatedBanners);
      setEditingIndex(null);
    }
  };

  const handleExpand = (index: number) => {
    setExpandedBannerIndex(index);
  };

  const handleCollapse = () => {
    setExpandedBannerIndex(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-6">
      <div className="container mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to Our Ad Banner Showcase
        </h1>
        <p className="text-lg text-gray-200">
          Explore our collection of vibrant and engaging ad banners. Click on
          any banner to view more details.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {banners.map((banner, index) => (
          <AdBanner
            key={index}
            title={banner.title}
            description={banner.description}
            cta={banner.cta}
            image={banner.image}
            background={banner.background}
            onEdit={() => handleEdit(index)}
            onExpand={() => handleExpand(index)}
          />
        ))}
      </div>
      {editingIndex !== null && (
        <EditBanner
          title={banners[editingIndex].title}
          description={banners[editingIndex].description}
          cta={banners[editingIndex].cta}
          image={banners[editingIndex].image}
          onSave={handleSave}
          onClose={() => setEditingIndex(null)}
        />
      )}
      {expandedBannerIndex !== null && (
        <ExpandedBanner
          title={banners[expandedBannerIndex].title}
          description={banners[expandedBannerIndex].description}
          cta={banners[expandedBannerIndex].cta}
          image={banners[expandedBannerIndex].image}
          background={banners[expandedBannerIndex].background}
          onClose={handleCollapse}
          onEdit={() => handleEdit(expandedBannerIndex)}
        />
      )}
    </div>
  );
};

export default Home;
