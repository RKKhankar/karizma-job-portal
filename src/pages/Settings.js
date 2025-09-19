// import React from "react";

// const Settings = () => <h1>Settings ⚙️</h1>;

// export default Settings;
import React, { useState } from "react";
import "../pages/Settings.css";

const Settings = () => {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState(true);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleNotificationChange = () => {
    setNotifications(!notifications);
  };

  return (
    <div className="settings-container">
      <h1>⚙️ Settings</h1>
      <p className="subtitle">Manage your account preferences here.</p>

      <form className="settings-form">
        {/* Profile Section */}
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="********" />
        </div>

        {/* Theme */}
        <div className="form-group">
          <label>Theme</label>
          <select value={theme} onChange={handleThemeChange}>
            <option value="light">🌞 Light</option>
            <option value="dark">🌙 Dark</option>
          </select>
        </div>

        {/* Notifications */}
        <div className="form-group checkbox">
          <input
            type="checkbox"
            checked={notifications}
            onChange={handleNotificationChange}
          />
          <label>Enable Notifications</label>
        </div>

        {/* Actions */}
        <button type="submit" className="save-btn">Save Changes</button>
        <button type="button" className="delete-btn">Delete Account</button>
      </form>
    </div>
  );
};

export default Settings;
