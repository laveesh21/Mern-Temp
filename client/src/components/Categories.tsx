import React from 'react';

interface Category {
  name: string;
}

const categories: Category[] = [
  { name: 'React' },
  { name: 'Node.js' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'Python' },
  { name: 'Java' },
  { name: 'Kotlin' },
  { name: 'Angular' },
  { name: 'Vue.js' },
  { name: 'Flutter' },
];

interface CategoryProps {
  selectedCategory: string | null;
  onResetCategory: () => void
  onSelectCategory: (category: string) => void;
}

const Categories: React.FC<CategoryProps> = ({ onSelectCategory, onResetCategory, selectedCategory }) => {

  const handleViewAll = () => {
    onResetCategory();
  }

  return (
    <div className="">
      <button onClick={handleViewAll} className={`py-3 w-full bg-zinc-900 mb-2 font-bold text=`}>Reset</button>

      <div className="grid grid-cols-2 gap-2">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => onSelectCategory(category.name)}
            className={`w-48 text-lg bg-zinc-900 text-left font-bold px-8 py-3  ${selectedCategory === category.name ? 'text-green-600' : ''
              }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;

