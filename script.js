document.addEventListener("DOMContentLoaded", function() {
    const jobData = [
        { name: "农业技术员", major: "农学类", code: "0901", link: "#" },
        { name: "种植研究员", major: "农艺与种业", code: "0902", link: "#" },
        { name: "实验室助理", major: "种子科学与工程", code: "0903", link: "#" },
        { name: "不限专业岗位", major: "不限", code: "0999", link: "#" }
    ];

    function displayJobs(data) {
        const jobList = document.getElementById("job-list");
        jobList.innerHTML = "";
        data.forEach(job => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${job.name}</td><td>${job.major}</td><td>${job.code}</td><td><a href="${job.link}" target="_blank">报名</a></td>`;
            jobList.appendChild(row);
        });
    }

    displayJobs(jobData);

    document.getElementById("search").addEventListener("input", function() {
        const keyword = this.value.trim().toLowerCase();
        const filteredJobs = jobData.filter(job =>
            job.name.toLowerCase().includes(keyword) ||
            job.major.toLowerCase().includes(keyword) ||
            job.code.includes(keyword)
        );
        displayJobs(filteredJobs);
    });
});
