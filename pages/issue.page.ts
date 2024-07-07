import { APIRequestContext } from '@playwright/test';

export class IssuePage {
  private request: APIRequestContext;
  private user: string;
  private repo: string;

  constructor(request: APIRequestContext, user: string, repo: string) {
    this.request = request;
    this.user = user;
    this.repo = repo;
  }

  async createIssue(title: string, body: string, labels: string[]) {
    const response = await this.request.post(`/repos/${this.user}/${this.repo}/issues`, {
      data: {
        title,
        body,
        labels
      },
    });
    return response;
  }

  async listIssues() {
    const response = await this.request.get(`/repos/${this.user}/${this.repo}/issues`);
    return response;
  }

  async updateIssue(issueNumber: number, body: string) {
    const response = await this.request.patch(`/repos/${this.user}/${this.repo}/issues/${issueNumber}`, {
      data: {
        body,
      },
    });
    return response;
  }

  async closeIssue(issueNumber: number) {
    const response = await this.request.patch(`/repos/${this.user}/${this.repo}/issues/${issueNumber}`, {
      data: {
        state: 'closed',
      },
    });
    return response;
  }

  async doesIssueExist(title: string): Promise<boolean> {
    const issues = await this.listIssues();
    const issuesJson = await issues.json();
    return issuesJson.some((issue: any) => issue.title === title);
  }
}
