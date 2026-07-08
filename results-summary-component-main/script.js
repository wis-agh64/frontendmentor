fetch("./data.json")
    .then(res => res.json())
    .then(data => data.forEach(item => {
        document.getElementById(item['category'] + "Value").innerText = item['score'];
        document.getElementById(item['category'] + "Icon").src = item['icon'];
    }));

    