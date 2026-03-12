# CRM Amtel Automator – Chrome Extension Guide

This tool is a **Chrome extension** that adds easy-to-use buttons to your browser when you're on the Amtel CRM website. No coding needed—just click buttons to automate registration and activation!
<img width="491" height="393" alt="Untitled" src="https://github.com/user-attachments/assets/c1be79e0-102e-42f1-9426-0a10894bfd70" />

---

## 🛠️ How to Install

1. Open **Google Chrome**
2. Go to `chrome://extensions`
3. Turn on **"Developer mode"** (top-right toggle)
4. Click **"Load unpacked"**
5. Select the folder containing this project
6. Pin the extension (click puzzle icon → pin 📌 next to "Amtel Automator")

> ✅ You’ll see the extension icon only when visiting the Amtel CRM site.

---

## 🎯 How to Use (Step-by-Step)

### 🔹 Step 1: Fill Page 1 (Personal Info)
- Navigate to **Page 1** of the subscriber form in CRM
- Click the **"Page 1"** button in the extension popup  
  → Auto-fills name, ID, address, next-of-kin, and sets location to **Boosaaso (Bari)**  
  → Automatically clicks **"Next"**

### 🔹 Step 2: Configure Services (Page 2)
- On **Page 2**, click the **"Page 2"** button  
  → Checks "Prepaid"  
  → Attaches "Base Plan"  
  → Picks an unused MSISDN (phone number)  
  → Asks you to enter **7-digit ICCID suffix** (e.g., `1234567`)  
  → Logs the activation securely

> 💡 You’ll get a prompt: *"Enter ICCID suffix (7 digits)"* — type only the last 7 digits of the SIM’s ICCID.

### 🔹 Step 3: Activate Subscriber
- After Page 2 completes, click **"Next & Activate"**  
  → Completes checkout  
  → Searches for the subscriber  
  → Clicks **Activate**  
  → Shows success/failure message

### 🔹 Step 4: Handle Errors (If Needed)
- If ICCID wasn’t accepted, click **"Retry ICCID"**  
  → Re-enter the 7 digits  
  → System safely retries without losing your data

---

## 📊 Reporting & Maintenance

| Button | What It Does |
|-------|--------------|
| **Export Report (Detailed)** | Downloads full activation log with dates, ICCIDs, and MSISDNs |
| **Export Report (CSV)** | Exports to Excel-friendly format |
| **Export Report (Simple)** | Shows daily activation counts |
| **Clear All Logs** | Deletes local history (⚠️ cannot be undone!) |

> 📁 Reports are saved automatically to your **Downloads** folder.

---

## ⚠️ Important Notes

- **Only works on the official Amtel CRM site**
- **Always verify** auto-filled data before final submission
- **ICCID must be 7 digits** — no spaces, letters, or full numbers
- Your activation history is stored **only on your computer** (not shared)
- If buttons don’t work, refresh the CRM page and try again

---

## ❓ Need Help?

- Make sure you’re on the correct CRM page (Page 1 or Page 2)
- Check that the extension is **pinned and enabled**
- Ensure pop-ups are allowed for the CRM site
- Contact your team lead if the CRM layout has changed

---

✅ **You’re ready!** Just open the CRM, click the extension buttons, and register subscribers in seconds.
