function check(tab_id, data, tab)
{
  if (tab.url.indexOf('wikipedia') > -1)
  {
    chrome.pageAction.show(tab_id);
  }
};
chrome.tabs.onUpdated.addListener(check);
