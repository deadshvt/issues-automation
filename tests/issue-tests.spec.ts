import { test, expect } from '@playwright/test';
import { IssuePage } from '../pages/issue.page';

const REPO = 'issues-automation';
const USER = 'deadshvt';

test.describe('Issue Management', () => {
  test('Create, verify, edit and delete an issue', async ({ request }) => {
    const issuePage = new IssuePage(request, USER, REPO);

    const newIssue = await issuePage.createIssue('Issue 1', 'Я нашел баг', ['bug']);
    expect(newIssue.ok()).toBeTruthy();

    const isPresent = await issuePage.doesIssueExist('Issue 1');
    expect(isPresent).toBe(true);

    const issues = await issuePage.listIssues();
    const issuesJson = await issues.json();
    const issueNumber = issuesJson.find((issue: any) => issue.title === 'Issue 1').number;

    const updatedIssue = await issuePage.updateIssue(issueNumber, 'Я нашел новый баг');
    expect(updatedIssue.ok()).toBeTruthy();

    const closedIssue = await issuePage.closeIssue(issueNumber);
    expect(closedIssue.ok()).toBeTruthy();
  });
});
