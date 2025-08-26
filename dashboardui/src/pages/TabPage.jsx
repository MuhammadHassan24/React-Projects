import React, { useEffect, useState } from 'react'
import TabButton from '../components/TabButton';
import { useSearchParams } from 'react-router';

const tabs = [
    { id: "tab1", label: "Home", content: <p>Welcome to the Home tab!</p> },
    { id: "tab2", label: "Profile", content: <p>This is your Profile.</p> },
    { id: "tab3", label: "Settings", content: <p>Adjust your Settings here.</p> },
];

function TabPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialTab = searchParams.get("tab") || tabs[0].id; // default first tab
    const [isActiveTab, setIsActiveTab] = useState(initialTab);

    // Jab tab change ho, URL update ho
    const handleTabChange = (tabId) => {
        setIsActiveTab(tabId);
        setSearchParams({ tab: tabId }); // URL me ?tab=tab2 jaise
    };

    // Agar URL manually change kare to state sync ho jaye
    useEffect(() => {
        const tab = searchParams.get("tab");
        if (tab && tabs.some(t => t.id === tab)) {
            setIsActiveTab(tab);
        }
    }, [searchParams]);

    return (
        <div className="w-full">
            <div className="flex justify-between px-10 border-gray-300">
                {tabs.map((tab) => (
                    <TabButton
                        key={tab.id}
                        label={tab.label}
                        isActive={isActiveTab === tab.id}
                        onClick={() => handleTabChange(tab.id)}
                    />
                ))}
            </div>

            {/* Tab Content */}
            <div className="p-10 transition-all duration-300 ease-in-out">
                {tabs.map(
                    (tab) =>
                        isActiveTab === tab.id && (
                            <div key={tab.id} className="animate-fadeIn">
                                {tab.content}
                            </div>
                        )
                )}
            </div>
        </div>
    )
}

export default TabPage;
