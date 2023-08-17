import React, { useState } from "react";

export  const Tab = ({ id, children }) => {
  const [isTabActive, setIsTabActive] = useState(false);

  return (
    <div
      className={isTabActive ? "tab-item tab-border" : "tab-item"}
      onClick={() => setIsTabActive(true)}
    >
      <i className={`fas fa-${id} fa-3x`} />
      <p className="hide-sm">{id}</p>
    </div>
  );
};

export const TabContent = ({ id, children }) => {
  const [isTabActive, setIsTabActive] = useState(false);

  return (
    <div
      className={isTabActive ? "tab-content-item show" : "tab-content-item"}
    >
      {children}
    </div>
  );
};

export const Apppp = () => {
  const [activeTab, setActiveTab] = useState("tab-1");

  return (
    <div>
      <ul>
        <li>
          <Tab id="tab-1">Cancel at any time</Tab>
        </li>
        <li>
          <Tab id="tab-2">Watch anywhere</Tab>
        </li>
        <li>
          <Tab id="tab-3">Pick Your Price</Tab>
        </li>
      </ul>
      <div className="tab-content">
        <TabContent id="tab-1-content">
          <p>
            If you decide Netflix isn't for you - no problem. No commitment.
            Cancel online anytime.
          </p>
          <a href="#">Watch Free For 30 Days</a>
        </TabContent>
        <TabContent id="tab-2-content">
          <p>
            Watch TV shows and movies anytime, anywhere - personalized for you.
          </p>
          <a href="#">Watch Free For 30 Days</a>
        </TabContent>
        <TabContent id="tab-3-content">
          <p>Choose one plan and watch everything on Netflix.</p>
          <a href="#">Watch Free For 30 Days</a>
        </TabContent>
      </div>
    </div>
  );
};