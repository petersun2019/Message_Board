function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

function submitContent() {
    // 获取输入内容
    const input = document.getElementById('userInput');
    const content = input.value.trim();
    
    // 检查是否有内容输入
    if (content === '') {
        alert('请输入内容！');
        return;
    }
    
    // 创建新的内容元素
    const contentList = document.getElementById('contentList');
    const newItem = document.createElement('div');
    newItem.className = 'content-item';
    
    // 创建内容、IP和时间的span元素
    const contentSpan = document.createElement('span');
    contentSpan.className = 'content-text';
    contentSpan.textContent = content;
    
    const ipSpan = document.createElement('span');
    ipSpan.className = 'content-ip';
    ipSpan.textContent = '127.0.0.1'; // 这里可以替换为真实的IP获取逻辑
    
    const timeSpan = document.createElement('span');
    timeSpan.className = 'content-time';
    timeSpan.textContent = getCurrentDateTime();
    
    // 将所有元素添加到新项目中
    newItem.appendChild(contentSpan);
    newItem.appendChild(ipSpan);
    newItem.appendChild(timeSpan);
    
    // 将新内容添加到列表最前面
    const contentItemsContainer = document.querySelector('.content-items-container');
    contentItemsContainer.insertBefore(newItem, contentItemsContainer.firstChild);
    
    // 清空输入框
    input.value = '';
} 