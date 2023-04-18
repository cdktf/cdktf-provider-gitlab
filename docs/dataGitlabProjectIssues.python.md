# `data_gitlab_project_issues`

Refer to the Terraform Registory for docs: [`data_gitlab_project_issues`](https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues).

# `dataGitlabProjectIssues` Submodule <a name="`dataGitlabProjectIssues` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectIssues"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectIssues <a name="DataGitlabProjectIssues" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues gitlab_project_issues}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_issues

dataGitlabProjectIssues.DataGitlabProjectIssues(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project: str,
  assignee_id: typing.Union[int, float] = None,
  assignee_username: str = None,
  author_id: typing.Union[int, float] = None,
  confidential: typing.Union[bool, IResolvable] = None,
  created_after: str = None,
  created_before: str = None,
  due_date: str = None,
  id: str = None,
  iids: typing.List[typing.Union[int, float]] = None,
  issue_type: str = None,
  labels: typing.List[str] = None,
  milestone: str = None,
  my_reaction_emoji: str = None,
  not_assignee_id: typing.List[typing.Union[int, float]] = None,
  not_author_id: typing.List[typing.Union[int, float]] = None,
  not_labels: typing.List[str] = None,
  not_milestone: str = None,
  not_my_reaction_emoji: typing.List[str] = None,
  order_by: str = None,
  scope: str = None,
  search: str = None,
  sort: str = None,
  updated_after: str = None,
  updated_before: str = None,
  weight: typing.Union[int, float] = None,
  with_labels_details: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.project">project</a></code> | <code>str</code> | The name or id of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.assigneeId">assignee_id</a></code> | <code>typing.Union[int, float]</code> | Return issues assigned to the given user id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.assigneeUsername">assignee_username</a></code> | <code>str</code> | Return issues assigned to the given username. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.authorId">author_id</a></code> | <code>typing.Union[int, float]</code> | Return issues created by the given user id. Combine with scope=all or scope=assigned_to_me. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.confidential">confidential</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Filter confidential or public issues. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.createdAfter">created_after</a></code> | <code>str</code> | Return issues created on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.createdBefore">created_before</a></code> | <code>str</code> | Return issues created on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.dueDate">due_date</a></code> | <code>str</code> | Return issues that have no due date, are overdue, or whose due date is this week, this month, or between two weeks ago and next month. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#id DataGitlabProjectIssues#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.iids">iids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Return only the issues having the given iid. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.issueType">issue_type</a></code> | <code>str</code> | Filter to a given type of issue. Valid values are [issue incident test_case]. (Introduced in GitLab 13.12). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.labels">labels</a></code> | <code>typing.List[str]</code> | Return issues with labels. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.milestone">milestone</a></code> | <code>str</code> | The milestone title. None lists all issues with no milestone. Any lists all issues that have an assigned milestone. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.myReactionEmoji">my_reaction_emoji</a></code> | <code>str</code> | Return issues reacted by the authenticated user by the given emoji. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.notAssigneeId">not_assignee_id</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Return issues that do not match the assignee id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.notAuthorId">not_author_id</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Return issues that do not match the author id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.notLabels">not_labels</a></code> | <code>typing.List[str]</code> | Return issues that do not match the labels. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.notMilestone">not_milestone</a></code> | <code>str</code> | Return issues that do not match the milestone. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.notMyReactionEmoji">not_my_reaction_emoji</a></code> | <code>typing.List[str]</code> | Return issues not reacted by the authenticated user by the given emoji. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.orderBy">order_by</a></code> | <code>str</code> | Return issues ordered by. Valid values are `created_at`, `updated_at`, `priority`, `due_date`, `relative_position`, `label_priority`, `milestone_due`, `popularity`, `weight`. Default is created_at. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Return issues for the given scope. Valid values are `created_by_me`, `assigned_to_me`, `all`. Defaults to all. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.search">search</a></code> | <code>str</code> | Search project issues against their title and description. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.sort">sort</a></code> | <code>str</code> | Return issues sorted in asc or desc order. Default is desc. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.updatedAfter">updated_after</a></code> | <code>str</code> | Return issues updated on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.updatedBefore">updated_before</a></code> | <code>str</code> | Return issues updated on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Return issues with the specified weight. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.withLabelsDetails">with_labels_details</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the response returns more details for each label in labels field: :name, :color, :description, :description_html, :text_color. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.project"></a>

- *Type:* str

The name or id of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#project DataGitlabProjectIssues#project}

---

##### `assignee_id`<sup>Optional</sup> <a name="assignee_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.assigneeId"></a>

- *Type:* typing.Union[int, float]

Return issues assigned to the given user id.

Mutually exclusive with assignee_username. None returns unassigned issues. Any returns issues with an assignee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#assignee_id DataGitlabProjectIssues#assignee_id}

---

##### `assignee_username`<sup>Optional</sup> <a name="assignee_username" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.assigneeUsername"></a>

- *Type:* str

Return issues assigned to the given username.

Similar to assignee_id and mutually exclusive with assignee_id. In GitLab CE, the assignee_username array should only contain a single value. Otherwise, an invalid parameter error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#assignee_username DataGitlabProjectIssues#assignee_username}

---

##### `author_id`<sup>Optional</sup> <a name="author_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.authorId"></a>

- *Type:* typing.Union[int, float]

Return issues created by the given user id. Combine with scope=all or scope=assigned_to_me.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#author_id DataGitlabProjectIssues#author_id}

---

##### `confidential`<sup>Optional</sup> <a name="confidential" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.confidential"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Filter confidential or public issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#confidential DataGitlabProjectIssues#confidential}

---

##### `created_after`<sup>Optional</sup> <a name="created_after" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.createdAfter"></a>

- *Type:* str

Return issues created on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#created_after DataGitlabProjectIssues#created_after}

---

##### `created_before`<sup>Optional</sup> <a name="created_before" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.createdBefore"></a>

- *Type:* str

Return issues created on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#created_before DataGitlabProjectIssues#created_before}

---

##### `due_date`<sup>Optional</sup> <a name="due_date" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.dueDate"></a>

- *Type:* str

Return issues that have no due date, are overdue, or whose due date is this week, this month, or between two weeks ago and next month.

Accepts: 0 (no due date), any, today, tomorrow, overdue, week, month, next_month_and_previous_two_weeks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#due_date DataGitlabProjectIssues#due_date}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#id DataGitlabProjectIssues#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iids`<sup>Optional</sup> <a name="iids" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.iids"></a>

- *Type:* typing.List[typing.Union[int, float]]

Return only the issues having the given iid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#iids DataGitlabProjectIssues#iids}

---

##### `issue_type`<sup>Optional</sup> <a name="issue_type" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.issueType"></a>

- *Type:* str

Filter to a given type of issue. Valid values are [issue incident test_case]. (Introduced in GitLab 13.12).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#issue_type DataGitlabProjectIssues#issue_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.labels"></a>

- *Type:* typing.List[str]

Return issues with labels.

Issues must have all labels to be returned. None lists all issues with no labels. Any lists all issues with at least one label. No+Label (Deprecated) lists all issues with no labels. Predefined names are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#labels DataGitlabProjectIssues#labels}

---

##### `milestone`<sup>Optional</sup> <a name="milestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.milestone"></a>

- *Type:* str

The milestone title. None lists all issues with no milestone. Any lists all issues that have an assigned milestone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#milestone DataGitlabProjectIssues#milestone}

---

##### `my_reaction_emoji`<sup>Optional</sup> <a name="my_reaction_emoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.myReactionEmoji"></a>

- *Type:* str

Return issues reacted by the authenticated user by the given emoji.

None returns issues not given a reaction. Any returns issues given at least one reaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#my_reaction_emoji DataGitlabProjectIssues#my_reaction_emoji}

---

##### `not_assignee_id`<sup>Optional</sup> <a name="not_assignee_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.notAssigneeId"></a>

- *Type:* typing.List[typing.Union[int, float]]

Return issues that do not match the assignee id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#not_assignee_id DataGitlabProjectIssues#not_assignee_id}

---

##### `not_author_id`<sup>Optional</sup> <a name="not_author_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.notAuthorId"></a>

- *Type:* typing.List[typing.Union[int, float]]

Return issues that do not match the author id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#not_author_id DataGitlabProjectIssues#not_author_id}

---

##### `not_labels`<sup>Optional</sup> <a name="not_labels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.notLabels"></a>

- *Type:* typing.List[str]

Return issues that do not match the labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#not_labels DataGitlabProjectIssues#not_labels}

---

##### `not_milestone`<sup>Optional</sup> <a name="not_milestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.notMilestone"></a>

- *Type:* str

Return issues that do not match the milestone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#not_milestone DataGitlabProjectIssues#not_milestone}

---

##### `not_my_reaction_emoji`<sup>Optional</sup> <a name="not_my_reaction_emoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.notMyReactionEmoji"></a>

- *Type:* typing.List[str]

Return issues not reacted by the authenticated user by the given emoji.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#not_my_reaction_emoji DataGitlabProjectIssues#not_my_reaction_emoji}

---

##### `order_by`<sup>Optional</sup> <a name="order_by" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.orderBy"></a>

- *Type:* str

Return issues ordered by. Valid values are `created_at`, `updated_at`, `priority`, `due_date`, `relative_position`, `label_priority`, `milestone_due`, `popularity`, `weight`. Default is created_at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#order_by DataGitlabProjectIssues#order_by}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.scope"></a>

- *Type:* str

Return issues for the given scope. Valid values are `created_by_me`, `assigned_to_me`, `all`. Defaults to all.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#scope DataGitlabProjectIssues#scope}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.search"></a>

- *Type:* str

Search project issues against their title and description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#search DataGitlabProjectIssues#search}

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.sort"></a>

- *Type:* str

Return issues sorted in asc or desc order. Default is desc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#sort DataGitlabProjectIssues#sort}

---

##### `updated_after`<sup>Optional</sup> <a name="updated_after" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.updatedAfter"></a>

- *Type:* str

Return issues updated on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#updated_after DataGitlabProjectIssues#updated_after}

---

##### `updated_before`<sup>Optional</sup> <a name="updated_before" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.updatedBefore"></a>

- *Type:* str

Return issues updated on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#updated_before DataGitlabProjectIssues#updated_before}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.weight"></a>

- *Type:* typing.Union[int, float]

Return issues with the specified weight.

None returns issues with no weight assigned. Any returns issues with a weight assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#weight DataGitlabProjectIssues#weight}

---

##### `with_labels_details`<sup>Optional</sup> <a name="with_labels_details" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.withLabelsDetails"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the response returns more details for each label in labels field: :name, :color, :description, :description_html, :text_color.

Default is false. description_html was introduced in GitLab 12.7

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#with_labels_details DataGitlabProjectIssues#with_labels_details}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAssigneeId">reset_assignee_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAssigneeUsername">reset_assignee_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAuthorId">reset_author_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetConfidential">reset_confidential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetCreatedAfter">reset_created_after</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetCreatedBefore">reset_created_before</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetDueDate">reset_due_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetIids">reset_iids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetIssueType">reset_issue_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetMilestone">reset_milestone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetMyReactionEmoji">reset_my_reaction_emoji</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotAssigneeId">reset_not_assignee_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotAuthorId">reset_not_author_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotLabels">reset_not_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotMilestone">reset_not_milestone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotMyReactionEmoji">reset_not_my_reaction_emoji</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetOrderBy">reset_order_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetSearch">reset_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetSort">reset_sort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetUpdatedAfter">reset_updated_after</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetUpdatedBefore">reset_updated_before</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetWeight">reset_weight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetWithLabelsDetails">reset_with_labels_details</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_assignee_id` <a name="reset_assignee_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAssigneeId"></a>

```python
def reset_assignee_id() -> None
```

##### `reset_assignee_username` <a name="reset_assignee_username" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAssigneeUsername"></a>

```python
def reset_assignee_username() -> None
```

##### `reset_author_id` <a name="reset_author_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAuthorId"></a>

```python
def reset_author_id() -> None
```

##### `reset_confidential` <a name="reset_confidential" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetConfidential"></a>

```python
def reset_confidential() -> None
```

##### `reset_created_after` <a name="reset_created_after" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetCreatedAfter"></a>

```python
def reset_created_after() -> None
```

##### `reset_created_before` <a name="reset_created_before" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetCreatedBefore"></a>

```python
def reset_created_before() -> None
```

##### `reset_due_date` <a name="reset_due_date" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetDueDate"></a>

```python
def reset_due_date() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_iids` <a name="reset_iids" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetIids"></a>

```python
def reset_iids() -> None
```

##### `reset_issue_type` <a name="reset_issue_type" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetIssueType"></a>

```python
def reset_issue_type() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_milestone` <a name="reset_milestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetMilestone"></a>

```python
def reset_milestone() -> None
```

##### `reset_my_reaction_emoji` <a name="reset_my_reaction_emoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetMyReactionEmoji"></a>

```python
def reset_my_reaction_emoji() -> None
```

##### `reset_not_assignee_id` <a name="reset_not_assignee_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotAssigneeId"></a>

```python
def reset_not_assignee_id() -> None
```

##### `reset_not_author_id` <a name="reset_not_author_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotAuthorId"></a>

```python
def reset_not_author_id() -> None
```

##### `reset_not_labels` <a name="reset_not_labels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotLabels"></a>

```python
def reset_not_labels() -> None
```

##### `reset_not_milestone` <a name="reset_not_milestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotMilestone"></a>

```python
def reset_not_milestone() -> None
```

##### `reset_not_my_reaction_emoji` <a name="reset_not_my_reaction_emoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotMyReactionEmoji"></a>

```python
def reset_not_my_reaction_emoji() -> None
```

##### `reset_order_by` <a name="reset_order_by" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetOrderBy"></a>

```python
def reset_order_by() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetSearch"></a>

```python
def reset_search() -> None
```

##### `reset_sort` <a name="reset_sort" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetSort"></a>

```python
def reset_sort() -> None
```

##### `reset_updated_after` <a name="reset_updated_after" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetUpdatedAfter"></a>

```python
def reset_updated_after() -> None
```

##### `reset_updated_before` <a name="reset_updated_before" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetUpdatedBefore"></a>

```python
def reset_updated_before() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetWeight"></a>

```python
def reset_weight() -> None
```

##### `reset_with_labels_details` <a name="reset_with_labels_details" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetWithLabelsDetails"></a>

```python
def reset_with_labels_details() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_issues

dataGitlabProjectIssues.DataGitlabProjectIssues.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_issues

dataGitlabProjectIssues.DataGitlabProjectIssues.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_issues

dataGitlabProjectIssues.DataGitlabProjectIssues.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issues">issues</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList">DataGitlabProjectIssuesIssuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeIdInput">assignee_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeUsernameInput">assignee_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.authorIdInput">author_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.confidentialInput">confidential_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdAfterInput">created_after_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdBeforeInput">created_before_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dueDateInput">due_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.iidsInput">iids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issueTypeInput">issue_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.labelsInput">labels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.milestoneInput">milestone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.myReactionEmojiInput">my_reaction_emoji_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAssigneeIdInput">not_assignee_id_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAuthorIdInput">not_author_id_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notLabelsInput">not_labels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMilestoneInput">not_milestone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMyReactionEmojiInput">not_my_reaction_emoji_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.orderByInput">order_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.sortInput">sort_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedAfterInput">updated_after_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedBeforeInput">updated_before_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.withLabelsDetailsInput">with_labels_details_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeId">assignee_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeUsername">assignee_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.authorId">author_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.confidential">confidential</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdAfter">created_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdBefore">created_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dueDate">due_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.iids">iids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issueType">issue_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.milestone">milestone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.myReactionEmoji">my_reaction_emoji</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAssigneeId">not_assignee_id</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAuthorId">not_author_id</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notLabels">not_labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMilestone">not_milestone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMyReactionEmoji">not_my_reaction_emoji</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.orderBy">order_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.search">search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.sort">sort</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedAfter">updated_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedBefore">updated_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.withLabelsDetails">with_labels_details</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `issues`<sup>Required</sup> <a name="issues" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issues"></a>

```python
issues: DataGitlabProjectIssuesIssuesList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList">DataGitlabProjectIssuesIssuesList</a>

---

##### `assignee_id_input`<sup>Optional</sup> <a name="assignee_id_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeIdInput"></a>

```python
assignee_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `assignee_username_input`<sup>Optional</sup> <a name="assignee_username_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeUsernameInput"></a>

```python
assignee_username_input: str
```

- *Type:* str

---

##### `author_id_input`<sup>Optional</sup> <a name="author_id_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.authorIdInput"></a>

```python
author_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `confidential_input`<sup>Optional</sup> <a name="confidential_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.confidentialInput"></a>

```python
confidential_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `created_after_input`<sup>Optional</sup> <a name="created_after_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdAfterInput"></a>

```python
created_after_input: str
```

- *Type:* str

---

##### `created_before_input`<sup>Optional</sup> <a name="created_before_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdBeforeInput"></a>

```python
created_before_input: str
```

- *Type:* str

---

##### `due_date_input`<sup>Optional</sup> <a name="due_date_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dueDateInput"></a>

```python
due_date_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `iids_input`<sup>Optional</sup> <a name="iids_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.iidsInput"></a>

```python
iids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `issue_type_input`<sup>Optional</sup> <a name="issue_type_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issueTypeInput"></a>

```python
issue_type_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.labelsInput"></a>

```python
labels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `milestone_input`<sup>Optional</sup> <a name="milestone_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.milestoneInput"></a>

```python
milestone_input: str
```

- *Type:* str

---

##### `my_reaction_emoji_input`<sup>Optional</sup> <a name="my_reaction_emoji_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.myReactionEmojiInput"></a>

```python
my_reaction_emoji_input: str
```

- *Type:* str

---

##### `not_assignee_id_input`<sup>Optional</sup> <a name="not_assignee_id_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAssigneeIdInput"></a>

```python
not_assignee_id_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `not_author_id_input`<sup>Optional</sup> <a name="not_author_id_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAuthorIdInput"></a>

```python
not_author_id_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `not_labels_input`<sup>Optional</sup> <a name="not_labels_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notLabelsInput"></a>

```python
not_labels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_milestone_input`<sup>Optional</sup> <a name="not_milestone_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMilestoneInput"></a>

```python
not_milestone_input: str
```

- *Type:* str

---

##### `not_my_reaction_emoji_input`<sup>Optional</sup> <a name="not_my_reaction_emoji_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMyReactionEmojiInput"></a>

```python
not_my_reaction_emoji_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `order_by_input`<sup>Optional</sup> <a name="order_by_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.orderByInput"></a>

```python
order_by_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `sort_input`<sup>Optional</sup> <a name="sort_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.sortInput"></a>

```python
sort_input: str
```

- *Type:* str

---

##### `updated_after_input`<sup>Optional</sup> <a name="updated_after_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedAfterInput"></a>

```python
updated_after_input: str
```

- *Type:* str

---

##### `updated_before_input`<sup>Optional</sup> <a name="updated_before_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedBeforeInput"></a>

```python
updated_before_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `with_labels_details_input`<sup>Optional</sup> <a name="with_labels_details_input" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.withLabelsDetailsInput"></a>

```python
with_labels_details_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `assignee_id`<sup>Required</sup> <a name="assignee_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeId"></a>

```python
assignee_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `assignee_username`<sup>Required</sup> <a name="assignee_username" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeUsername"></a>

```python
assignee_username: str
```

- *Type:* str

---

##### `author_id`<sup>Required</sup> <a name="author_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.authorId"></a>

```python
author_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `confidential`<sup>Required</sup> <a name="confidential" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.confidential"></a>

```python
confidential: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `created_after`<sup>Required</sup> <a name="created_after" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdAfter"></a>

```python
created_after: str
```

- *Type:* str

---

##### `created_before`<sup>Required</sup> <a name="created_before" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdBefore"></a>

```python
created_before: str
```

- *Type:* str

---

##### `due_date`<sup>Required</sup> <a name="due_date" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dueDate"></a>

```python
due_date: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `iids`<sup>Required</sup> <a name="iids" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.iids"></a>

```python
iids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `issue_type`<sup>Required</sup> <a name="issue_type" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issueType"></a>

```python
issue_type: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `milestone`<sup>Required</sup> <a name="milestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.milestone"></a>

```python
milestone: str
```

- *Type:* str

---

##### `my_reaction_emoji`<sup>Required</sup> <a name="my_reaction_emoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.myReactionEmoji"></a>

```python
my_reaction_emoji: str
```

- *Type:* str

---

##### `not_assignee_id`<sup>Required</sup> <a name="not_assignee_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAssigneeId"></a>

```python
not_assignee_id: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `not_author_id`<sup>Required</sup> <a name="not_author_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAuthorId"></a>

```python
not_author_id: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `not_labels`<sup>Required</sup> <a name="not_labels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notLabels"></a>

```python
not_labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_milestone`<sup>Required</sup> <a name="not_milestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMilestone"></a>

```python
not_milestone: str
```

- *Type:* str

---

##### `not_my_reaction_emoji`<sup>Required</sup> <a name="not_my_reaction_emoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMyReactionEmoji"></a>

```python
not_my_reaction_emoji: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `order_by`<sup>Required</sup> <a name="order_by" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.orderBy"></a>

```python
order_by: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.search"></a>

```python
search: str
```

- *Type:* str

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.sort"></a>

```python
sort: str
```

- *Type:* str

---

##### `updated_after`<sup>Required</sup> <a name="updated_after" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedAfter"></a>

```python
updated_after: str
```

- *Type:* str

---

##### `updated_before`<sup>Required</sup> <a name="updated_before" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedBefore"></a>

```python
updated_before: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `with_labels_details`<sup>Required</sup> <a name="with_labels_details" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.withLabelsDetails"></a>

```python
with_labels_details: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectIssuesConfig <a name="DataGitlabProjectIssuesConfig" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_issues

dataGitlabProjectIssues.DataGitlabProjectIssuesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project: str,
  assignee_id: typing.Union[int, float] = None,
  assignee_username: str = None,
  author_id: typing.Union[int, float] = None,
  confidential: typing.Union[bool, IResolvable] = None,
  created_after: str = None,
  created_before: str = None,
  due_date: str = None,
  id: str = None,
  iids: typing.List[typing.Union[int, float]] = None,
  issue_type: str = None,
  labels: typing.List[str] = None,
  milestone: str = None,
  my_reaction_emoji: str = None,
  not_assignee_id: typing.List[typing.Union[int, float]] = None,
  not_author_id: typing.List[typing.Union[int, float]] = None,
  not_labels: typing.List[str] = None,
  not_milestone: str = None,
  not_my_reaction_emoji: typing.List[str] = None,
  order_by: str = None,
  scope: str = None,
  search: str = None,
  sort: str = None,
  updated_after: str = None,
  updated_before: str = None,
  weight: typing.Union[int, float] = None,
  with_labels_details: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.project">project</a></code> | <code>str</code> | The name or id of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.assigneeId">assignee_id</a></code> | <code>typing.Union[int, float]</code> | Return issues assigned to the given user id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.assigneeUsername">assignee_username</a></code> | <code>str</code> | Return issues assigned to the given username. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.authorId">author_id</a></code> | <code>typing.Union[int, float]</code> | Return issues created by the given user id. Combine with scope=all or scope=assigned_to_me. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.confidential">confidential</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Filter confidential or public issues. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.createdAfter">created_after</a></code> | <code>str</code> | Return issues created on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.createdBefore">created_before</a></code> | <code>str</code> | Return issues created on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.dueDate">due_date</a></code> | <code>str</code> | Return issues that have no due date, are overdue, or whose due date is this week, this month, or between two weeks ago and next month. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#id DataGitlabProjectIssues#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.iids">iids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Return only the issues having the given iid. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.issueType">issue_type</a></code> | <code>str</code> | Filter to a given type of issue. Valid values are [issue incident test_case]. (Introduced in GitLab 13.12). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.labels">labels</a></code> | <code>typing.List[str]</code> | Return issues with labels. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.milestone">milestone</a></code> | <code>str</code> | The milestone title. None lists all issues with no milestone. Any lists all issues that have an assigned milestone. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.myReactionEmoji">my_reaction_emoji</a></code> | <code>str</code> | Return issues reacted by the authenticated user by the given emoji. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notAssigneeId">not_assignee_id</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Return issues that do not match the assignee id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notAuthorId">not_author_id</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Return issues that do not match the author id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notLabels">not_labels</a></code> | <code>typing.List[str]</code> | Return issues that do not match the labels. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notMilestone">not_milestone</a></code> | <code>str</code> | Return issues that do not match the milestone. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notMyReactionEmoji">not_my_reaction_emoji</a></code> | <code>typing.List[str]</code> | Return issues not reacted by the authenticated user by the given emoji. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.orderBy">order_by</a></code> | <code>str</code> | Return issues ordered by. Valid values are `created_at`, `updated_at`, `priority`, `due_date`, `relative_position`, `label_priority`, `milestone_due`, `popularity`, `weight`. Default is created_at. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.scope">scope</a></code> | <code>str</code> | Return issues for the given scope. Valid values are `created_by_me`, `assigned_to_me`, `all`. Defaults to all. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.search">search</a></code> | <code>str</code> | Search project issues against their title and description. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.sort">sort</a></code> | <code>str</code> | Return issues sorted in asc or desc order. Default is desc. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.updatedAfter">updated_after</a></code> | <code>str</code> | Return issues updated on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.updatedBefore">updated_before</a></code> | <code>str</code> | Return issues updated on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Return issues with the specified weight. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.withLabelsDetails">with_labels_details</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the response returns more details for each label in labels field: :name, :color, :description, :description_html, :text_color. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The name or id of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#project DataGitlabProjectIssues#project}

---

##### `assignee_id`<sup>Optional</sup> <a name="assignee_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.assigneeId"></a>

```python
assignee_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Return issues assigned to the given user id.

Mutually exclusive with assignee_username. None returns unassigned issues. Any returns issues with an assignee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#assignee_id DataGitlabProjectIssues#assignee_id}

---

##### `assignee_username`<sup>Optional</sup> <a name="assignee_username" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.assigneeUsername"></a>

```python
assignee_username: str
```

- *Type:* str

Return issues assigned to the given username.

Similar to assignee_id and mutually exclusive with assignee_id. In GitLab CE, the assignee_username array should only contain a single value. Otherwise, an invalid parameter error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#assignee_username DataGitlabProjectIssues#assignee_username}

---

##### `author_id`<sup>Optional</sup> <a name="author_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.authorId"></a>

```python
author_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Return issues created by the given user id. Combine with scope=all or scope=assigned_to_me.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#author_id DataGitlabProjectIssues#author_id}

---

##### `confidential`<sup>Optional</sup> <a name="confidential" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.confidential"></a>

```python
confidential: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Filter confidential or public issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#confidential DataGitlabProjectIssues#confidential}

---

##### `created_after`<sup>Optional</sup> <a name="created_after" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.createdAfter"></a>

```python
created_after: str
```

- *Type:* str

Return issues created on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#created_after DataGitlabProjectIssues#created_after}

---

##### `created_before`<sup>Optional</sup> <a name="created_before" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.createdBefore"></a>

```python
created_before: str
```

- *Type:* str

Return issues created on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#created_before DataGitlabProjectIssues#created_before}

---

##### `due_date`<sup>Optional</sup> <a name="due_date" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.dueDate"></a>

```python
due_date: str
```

- *Type:* str

Return issues that have no due date, are overdue, or whose due date is this week, this month, or between two weeks ago and next month.

Accepts: 0 (no due date), any, today, tomorrow, overdue, week, month, next_month_and_previous_two_weeks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#due_date DataGitlabProjectIssues#due_date}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#id DataGitlabProjectIssues#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iids`<sup>Optional</sup> <a name="iids" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.iids"></a>

```python
iids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Return only the issues having the given iid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#iids DataGitlabProjectIssues#iids}

---

##### `issue_type`<sup>Optional</sup> <a name="issue_type" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.issueType"></a>

```python
issue_type: str
```

- *Type:* str

Filter to a given type of issue. Valid values are [issue incident test_case]. (Introduced in GitLab 13.12).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#issue_type DataGitlabProjectIssues#issue_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

Return issues with labels.

Issues must have all labels to be returned. None lists all issues with no labels. Any lists all issues with at least one label. No+Label (Deprecated) lists all issues with no labels. Predefined names are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#labels DataGitlabProjectIssues#labels}

---

##### `milestone`<sup>Optional</sup> <a name="milestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.milestone"></a>

```python
milestone: str
```

- *Type:* str

The milestone title. None lists all issues with no milestone. Any lists all issues that have an assigned milestone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#milestone DataGitlabProjectIssues#milestone}

---

##### `my_reaction_emoji`<sup>Optional</sup> <a name="my_reaction_emoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.myReactionEmoji"></a>

```python
my_reaction_emoji: str
```

- *Type:* str

Return issues reacted by the authenticated user by the given emoji.

None returns issues not given a reaction. Any returns issues given at least one reaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#my_reaction_emoji DataGitlabProjectIssues#my_reaction_emoji}

---

##### `not_assignee_id`<sup>Optional</sup> <a name="not_assignee_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notAssigneeId"></a>

```python
not_assignee_id: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Return issues that do not match the assignee id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#not_assignee_id DataGitlabProjectIssues#not_assignee_id}

---

##### `not_author_id`<sup>Optional</sup> <a name="not_author_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notAuthorId"></a>

```python
not_author_id: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Return issues that do not match the author id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#not_author_id DataGitlabProjectIssues#not_author_id}

---

##### `not_labels`<sup>Optional</sup> <a name="not_labels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notLabels"></a>

```python
not_labels: typing.List[str]
```

- *Type:* typing.List[str]

Return issues that do not match the labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#not_labels DataGitlabProjectIssues#not_labels}

---

##### `not_milestone`<sup>Optional</sup> <a name="not_milestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notMilestone"></a>

```python
not_milestone: str
```

- *Type:* str

Return issues that do not match the milestone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#not_milestone DataGitlabProjectIssues#not_milestone}

---

##### `not_my_reaction_emoji`<sup>Optional</sup> <a name="not_my_reaction_emoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notMyReactionEmoji"></a>

```python
not_my_reaction_emoji: typing.List[str]
```

- *Type:* typing.List[str]

Return issues not reacted by the authenticated user by the given emoji.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#not_my_reaction_emoji DataGitlabProjectIssues#not_my_reaction_emoji}

---

##### `order_by`<sup>Optional</sup> <a name="order_by" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.orderBy"></a>

```python
order_by: str
```

- *Type:* str

Return issues ordered by. Valid values are `created_at`, `updated_at`, `priority`, `due_date`, `relative_position`, `label_priority`, `milestone_due`, `popularity`, `weight`. Default is created_at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#order_by DataGitlabProjectIssues#order_by}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Return issues for the given scope. Valid values are `created_by_me`, `assigned_to_me`, `all`. Defaults to all.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#scope DataGitlabProjectIssues#scope}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.search"></a>

```python
search: str
```

- *Type:* str

Search project issues against their title and description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#search DataGitlabProjectIssues#search}

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.sort"></a>

```python
sort: str
```

- *Type:* str

Return issues sorted in asc or desc order. Default is desc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#sort DataGitlabProjectIssues#sort}

---

##### `updated_after`<sup>Optional</sup> <a name="updated_after" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.updatedAfter"></a>

```python
updated_after: str
```

- *Type:* str

Return issues updated on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#updated_after DataGitlabProjectIssues#updated_after}

---

##### `updated_before`<sup>Optional</sup> <a name="updated_before" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.updatedBefore"></a>

```python
updated_before: str
```

- *Type:* str

Return issues updated on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#updated_before DataGitlabProjectIssues#updated_before}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Return issues with the specified weight.

None returns issues with no weight assigned. Any returns issues with a weight assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#weight DataGitlabProjectIssues#weight}

---

##### `with_labels_details`<sup>Optional</sup> <a name="with_labels_details" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.withLabelsDetails"></a>

```python
with_labels_details: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the response returns more details for each label in labels field: :name, :color, :description, :description_html, :text_color.

Default is false. description_html was introduced in GitLab 12.7

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/data-sources/project_issues#with_labels_details DataGitlabProjectIssues#with_labels_details}

---

### DataGitlabProjectIssuesIssues <a name="DataGitlabProjectIssuesIssues" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssues.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_issues

dataGitlabProjectIssues.DataGitlabProjectIssuesIssues()
```


### DataGitlabProjectIssuesIssuesTaskCompletionStatus <a name="DataGitlabProjectIssuesIssuesTaskCompletionStatus" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_issues

dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatus()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectIssuesIssuesList <a name="DataGitlabProjectIssuesIssuesList" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_issues

dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabProjectIssuesIssuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGitlabProjectIssuesIssuesOutputReference <a name="DataGitlabProjectIssuesIssuesOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_issues

dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.assigneeIds">assignee_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.authorId">author_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.closedAt">closed_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.closedByUserId">closed_by_user_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.confidential">confidential</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.discussionLocked">discussion_locked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.discussionToResolve">discussion_to_resolve</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.downvotes">downvotes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.dueDate">due_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.epicId">epic_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.epicIssueId">epic_issue_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.humanTimeEstimate">human_time_estimate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.humanTotalTimeSpent">human_total_time_spent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.iid">iid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueId">issue_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueLinkId">issue_link_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueType">issue_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.links">links</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.mergeRequestsCount">merge_requests_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.mergeRequestToResolveDiscussionsOf">merge_request_to_resolve_discussions_of</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.milestoneId">milestone_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.movedToId">moved_to_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.references">references</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.subscribed">subscribed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.taskCompletionStatus">task_completion_status</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList">DataGitlabProjectIssuesIssuesTaskCompletionStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.timeEstimate">time_estimate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.totalTimeSpent">total_time_spent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.upvotes">upvotes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.userNotesCount">user_notes_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.webUrl">web_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssues">DataGitlabProjectIssuesIssues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assignee_ids`<sup>Required</sup> <a name="assignee_ids" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.assigneeIds"></a>

```python
assignee_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `author_id`<sup>Required</sup> <a name="author_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.authorId"></a>

```python
author_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `closed_at`<sup>Required</sup> <a name="closed_at" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.closedAt"></a>

```python
closed_at: str
```

- *Type:* str

---

##### `closed_by_user_id`<sup>Required</sup> <a name="closed_by_user_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.closedByUserId"></a>

```python
closed_by_user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `confidential`<sup>Required</sup> <a name="confidential" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.confidential"></a>

```python
confidential: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `discussion_locked`<sup>Required</sup> <a name="discussion_locked" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.discussionLocked"></a>

```python
discussion_locked: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `discussion_to_resolve`<sup>Required</sup> <a name="discussion_to_resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.discussionToResolve"></a>

```python
discussion_to_resolve: str
```

- *Type:* str

---

##### `downvotes`<sup>Required</sup> <a name="downvotes" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.downvotes"></a>

```python
downvotes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `due_date`<sup>Required</sup> <a name="due_date" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.dueDate"></a>

```python
due_date: str
```

- *Type:* str

---

##### `epic_id`<sup>Required</sup> <a name="epic_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.epicId"></a>

```python
epic_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `epic_issue_id`<sup>Required</sup> <a name="epic_issue_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.epicIssueId"></a>

```python
epic_issue_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `human_time_estimate`<sup>Required</sup> <a name="human_time_estimate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.humanTimeEstimate"></a>

```python
human_time_estimate: str
```

- *Type:* str

---

##### `human_total_time_spent`<sup>Required</sup> <a name="human_total_time_spent" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.humanTotalTimeSpent"></a>

```python
human_total_time_spent: str
```

- *Type:* str

---

##### `iid`<sup>Required</sup> <a name="iid" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.iid"></a>

```python
iid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issue_id`<sup>Required</sup> <a name="issue_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueId"></a>

```python
issue_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issue_link_id`<sup>Required</sup> <a name="issue_link_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueLinkId"></a>

```python
issue_link_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issue_type`<sup>Required</sup> <a name="issue_type" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueType"></a>

```python
issue_type: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.links"></a>

```python
links: StringMap
```

- *Type:* cdktf.StringMap

---

##### `merge_requests_count`<sup>Required</sup> <a name="merge_requests_count" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.mergeRequestsCount"></a>

```python
merge_requests_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `merge_request_to_resolve_discussions_of`<sup>Required</sup> <a name="merge_request_to_resolve_discussions_of" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.mergeRequestToResolveDiscussionsOf"></a>

```python
merge_request_to_resolve_discussions_of: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `milestone_id`<sup>Required</sup> <a name="milestone_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.milestoneId"></a>

```python
milestone_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `moved_to_id`<sup>Required</sup> <a name="moved_to_id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.movedToId"></a>

```python
moved_to_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `references`<sup>Required</sup> <a name="references" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.references"></a>

```python
references: StringMap
```

- *Type:* cdktf.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subscribed`<sup>Required</sup> <a name="subscribed" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.subscribed"></a>

```python
subscribed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `task_completion_status`<sup>Required</sup> <a name="task_completion_status" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.taskCompletionStatus"></a>

```python
task_completion_status: DataGitlabProjectIssuesIssuesTaskCompletionStatusList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList">DataGitlabProjectIssuesIssuesTaskCompletionStatusList</a>

---

##### `time_estimate`<sup>Required</sup> <a name="time_estimate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.timeEstimate"></a>

```python
time_estimate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `total_time_spent`<sup>Required</sup> <a name="total_time_spent" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.totalTimeSpent"></a>

```python
total_time_spent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `upvotes`<sup>Required</sup> <a name="upvotes" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.upvotes"></a>

```python
upvotes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_notes_count`<sup>Required</sup> <a name="user_notes_count" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.userNotesCount"></a>

```python
user_notes_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `web_url`<sup>Required</sup> <a name="web_url" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.webUrl"></a>

```python
web_url: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.internalValue"></a>

```python
internal_value: DataGitlabProjectIssuesIssues
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssues">DataGitlabProjectIssuesIssues</a>

---


### DataGitlabProjectIssuesIssuesTaskCompletionStatusList <a name="DataGitlabProjectIssuesIssuesTaskCompletionStatusList" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_issues

dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference <a name="DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_issues

dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.completedCount">completed_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatus">DataGitlabProjectIssuesIssuesTaskCompletionStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `completed_count`<sup>Required</sup> <a name="completed_count" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.completedCount"></a>

```python
completed_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataGitlabProjectIssuesIssuesTaskCompletionStatus
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatus">DataGitlabProjectIssuesIssuesTaskCompletionStatus</a>

---



