// popup.js – Handles button clicks in the popup

async function runFunctionInActiveTab(fnName, args = []) {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  const tab = tabs[0];

  if (!tab) {
    alert("No active tab found.");
    return;
  }

  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (name, params) => {
        if (typeof window[name] === 'function') {
          window[name](...params);
        } else {
          console.error(`Function ${name} not available.`);
          alert(`⚠️ Function "${name}" not found on page.`);
        }
      },
      args: [fnName, args]
    });
  } catch (err) {
    console.error("Execution error:", err);
    alert("❌ Failed to run action.\nCheck console for details.");
  }
}

// Bind button events
document.getElementById('page1').addEventListener('click', () => runFunctionInActiveTab('page1'));
document.getElementById('page2').addEventListener('click', () => runFunctionInActiveTab('page2'));
document.getElementById('retry').addEventListener('click', () => runFunctionInActiveTab('retryIccidSelection'));
document.getElementById('next').addEventListener('click', () => runFunctionInActiveTab('next'));

document.getElementById('generateReport').addEventListener('click', () => {
  const format = document.getElementById('reportFormat').value;
  runFunctionInActiveTab('generateActivationReport', [format]);
});
