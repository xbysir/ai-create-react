import React from "react";
import { docSections } from "../data/docs";

const Docs: React.FC = () => { 
  const [activeSection, setActiveSection] = React.useState(docSections[0].id);
    
  return ( 
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
          技术文档
        </h1>

        <div className="flex gap-8">
          {/* 侧边导航 */}
          <nav className="w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-2">
              {docSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${activeSection === section.id ? "bg-primary text-white" : "hover:bg-gray-100"}`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </nav>

          {/* 文档内容 */}
          <div className="flex-1">
            <div className="prose prose-lg max-w-none">
              {docSections
                .find((section) => section.id === activeSection)
                ?.sections.map((section, index) => (
                  <div key={index} className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                    {section.items && (
                      <ul className="list-disc list-inside space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="text-gray-700">{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;