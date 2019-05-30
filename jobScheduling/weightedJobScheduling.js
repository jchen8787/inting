// https://www.geeksforgeeks.org/weighted-job-scheduling/

const latestNonConflictIndex = (jobs, i) => {
    for (let j = i - 1; j >= 0; j--) {
        if (jobs[j][1] <= jobs[i][0]) {
            return j;
        }
    }

    return -1;
};

const findMaxProfitRec = (jobs, n) => {
    if (n === 0) {
        return jobs[n][2];
    }

    const inclCurrentProfit = jobs[n][2];
    const latestIndex = latestNonConflictIndex(jobs, n);
    const includeMaxProfit =
        latestIndex !== -1
            ? inclCurrentProfit + findMaxProfitRec(jobs, latestIndex)
            : inclCurrentProfit;

    const excludeMaxProfit = findMaxProfitRec(jobs, n - 1);

    return Math.max(includeMaxProfit, excludeMaxProfit);
};

const findMaxProfit = jobs => {
    jobs.sort((a, b) => a[1] - b[1]);

    return findMaxProfitRec(jobs, jobs.length - 1);
};

// each job is [startTime, endTime, profit]
const jobs = [[1, 2, 40], [3, 5, 20], [6, 19, 100], [2, 100, 5]];

const maxProfit = findMaxProfit(jobs)
console.log(maxProfit)
