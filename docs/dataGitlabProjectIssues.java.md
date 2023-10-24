# `data_gitlab_project_issues`

Refer to the Terraform Registory for docs: [`data_gitlab_project_issues`](https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues).

# `dataGitlabProjectIssues` Submodule <a name="`dataGitlabProjectIssues` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectIssues"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectIssues <a name="DataGitlabProjectIssues" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues gitlab_project_issues}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_issues.DataGitlabProjectIssues;

DataGitlabProjectIssues.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .project(java.lang.String)
//  .assigneeId(java.lang.Number)
//  .assigneeUsername(java.lang.String)
//  .authorId(java.lang.Number)
//  .confidential(java.lang.Boolean)
//  .confidential(IResolvable)
//  .createdAfter(java.lang.String)
//  .createdBefore(java.lang.String)
//  .dueDate(java.lang.String)
//  .id(java.lang.String)
//  .iids(java.util.List<java.lang.Number>)
//  .issueType(java.lang.String)
//  .labels(java.util.List<java.lang.String>)
//  .milestone(java.lang.String)
//  .myReactionEmoji(java.lang.String)
//  .notAssigneeId(java.util.List<java.lang.Number>)
//  .notAuthorId(java.util.List<java.lang.Number>)
//  .notLabels(java.util.List<java.lang.String>)
//  .notMilestone(java.lang.String)
//  .notMyReactionEmoji(java.util.List<java.lang.String>)
//  .orderBy(java.lang.String)
//  .scope(java.lang.String)
//  .search(java.lang.String)
//  .sort(java.lang.String)
//  .updatedAfter(java.lang.String)
//  .updatedBefore(java.lang.String)
//  .weight(java.lang.Number)
//  .withLabelsDetails(java.lang.Boolean)
//  .withLabelsDetails(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The name or id of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.assigneeId">assigneeId</a></code> | <code>java.lang.Number</code> | Return issues assigned to the given user id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.assigneeUsername">assigneeUsername</a></code> | <code>java.lang.String</code> | Return issues assigned to the given username. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.authorId">authorId</a></code> | <code>java.lang.Number</code> | Return issues created by the given user id. Combine with scope=all or scope=assigned_to_me. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.confidential">confidential</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Filter confidential or public issues. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.createdAfter">createdAfter</a></code> | <code>java.lang.String</code> | Return issues created on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.createdBefore">createdBefore</a></code> | <code>java.lang.String</code> | Return issues created on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.dueDate">dueDate</a></code> | <code>java.lang.String</code> | Return issues that have no due date, are overdue, or whose due date is this week, this month, or between two weeks ago and next month. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#id DataGitlabProjectIssues#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.iids">iids</a></code> | <code>java.util.List<java.lang.Number></code> | Return only the issues having the given iid. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.issueType">issueType</a></code> | <code>java.lang.String</code> | Filter to a given type of issue. Valid values are [issue incident test_case]. (Introduced in GitLab 13.12). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | Return issues with labels. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.milestone">milestone</a></code> | <code>java.lang.String</code> | The milestone title. None lists all issues with no milestone. Any lists all issues that have an assigned milestone. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.myReactionEmoji">myReactionEmoji</a></code> | <code>java.lang.String</code> | Return issues reacted by the authenticated user by the given emoji. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.notAssigneeId">notAssigneeId</a></code> | <code>java.util.List<java.lang.Number></code> | Return issues that do not match the assignee id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.notAuthorId">notAuthorId</a></code> | <code>java.util.List<java.lang.Number></code> | Return issues that do not match the author id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.notLabels">notLabels</a></code> | <code>java.util.List<java.lang.String></code> | Return issues that do not match the labels. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.notMilestone">notMilestone</a></code> | <code>java.lang.String</code> | Return issues that do not match the milestone. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.notMyReactionEmoji">notMyReactionEmoji</a></code> | <code>java.util.List<java.lang.String></code> | Return issues not reacted by the authenticated user by the given emoji. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.orderBy">orderBy</a></code> | <code>java.lang.String</code> | Return issues ordered by. Valid values are `created_at`, `updated_at`, `priority`, `due_date`, `relative_position`, `label_priority`, `milestone_due`, `popularity`, `weight`. Default is created_at. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | Return issues for the given scope. Valid values are `created_by_me`, `assigned_to_me`, `all`. Defaults to all. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.search">search</a></code> | <code>java.lang.String</code> | Search project issues against their title and description. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.sort">sort</a></code> | <code>java.lang.String</code> | Return issues sorted in asc or desc order. Default is desc. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.updatedAfter">updatedAfter</a></code> | <code>java.lang.String</code> | Return issues updated on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.updatedBefore">updatedBefore</a></code> | <code>java.lang.String</code> | Return issues updated on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.weight">weight</a></code> | <code>java.lang.Number</code> | Return issues with the specified weight. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.withLabelsDetails">withLabelsDetails</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the response returns more details for each label in labels field: :name, :color, :description, :description_html, :text_color. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The name or id of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#project DataGitlabProjectIssues#project}

---

##### `assigneeId`<sup>Optional</sup> <a name="assigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.assigneeId"></a>

- *Type:* java.lang.Number

Return issues assigned to the given user id.

Mutually exclusive with assignee_username. None returns unassigned issues. Any returns issues with an assignee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#assignee_id DataGitlabProjectIssues#assignee_id}

---

##### `assigneeUsername`<sup>Optional</sup> <a name="assigneeUsername" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.assigneeUsername"></a>

- *Type:* java.lang.String

Return issues assigned to the given username.

Similar to assignee_id and mutually exclusive with assignee_id. In GitLab CE, the assignee_username array should only contain a single value. Otherwise, an invalid parameter error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#assignee_username DataGitlabProjectIssues#assignee_username}

---

##### `authorId`<sup>Optional</sup> <a name="authorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.authorId"></a>

- *Type:* java.lang.Number

Return issues created by the given user id. Combine with scope=all or scope=assigned_to_me.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#author_id DataGitlabProjectIssues#author_id}

---

##### `confidential`<sup>Optional</sup> <a name="confidential" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.confidential"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Filter confidential or public issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#confidential DataGitlabProjectIssues#confidential}

---

##### `createdAfter`<sup>Optional</sup> <a name="createdAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.createdAfter"></a>

- *Type:* java.lang.String

Return issues created on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#created_after DataGitlabProjectIssues#created_after}

---

##### `createdBefore`<sup>Optional</sup> <a name="createdBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.createdBefore"></a>

- *Type:* java.lang.String

Return issues created on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#created_before DataGitlabProjectIssues#created_before}

---

##### `dueDate`<sup>Optional</sup> <a name="dueDate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.dueDate"></a>

- *Type:* java.lang.String

Return issues that have no due date, are overdue, or whose due date is this week, this month, or between two weeks ago and next month.

Accepts: 0 (no due date), any, today, tomorrow, overdue, week, month, next_month_and_previous_two_weeks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#due_date DataGitlabProjectIssues#due_date}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#id DataGitlabProjectIssues#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iids`<sup>Optional</sup> <a name="iids" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.iids"></a>

- *Type:* java.util.List<java.lang.Number>

Return only the issues having the given iid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#iids DataGitlabProjectIssues#iids}

---

##### `issueType`<sup>Optional</sup> <a name="issueType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.issueType"></a>

- *Type:* java.lang.String

Filter to a given type of issue. Valid values are [issue incident test_case]. (Introduced in GitLab 13.12).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#issue_type DataGitlabProjectIssues#issue_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.labels"></a>

- *Type:* java.util.List<java.lang.String>

Return issues with labels.

Issues must have all labels to be returned. None lists all issues with no labels. Any lists all issues with at least one label. No+Label (Deprecated) lists all issues with no labels. Predefined names are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#labels DataGitlabProjectIssues#labels}

---

##### `milestone`<sup>Optional</sup> <a name="milestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.milestone"></a>

- *Type:* java.lang.String

The milestone title. None lists all issues with no milestone. Any lists all issues that have an assigned milestone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#milestone DataGitlabProjectIssues#milestone}

---

##### `myReactionEmoji`<sup>Optional</sup> <a name="myReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.myReactionEmoji"></a>

- *Type:* java.lang.String

Return issues reacted by the authenticated user by the given emoji.

None returns issues not given a reaction. Any returns issues given at least one reaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#my_reaction_emoji DataGitlabProjectIssues#my_reaction_emoji}

---

##### `notAssigneeId`<sup>Optional</sup> <a name="notAssigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.notAssigneeId"></a>

- *Type:* java.util.List<java.lang.Number>

Return issues that do not match the assignee id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#not_assignee_id DataGitlabProjectIssues#not_assignee_id}

---

##### `notAuthorId`<sup>Optional</sup> <a name="notAuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.notAuthorId"></a>

- *Type:* java.util.List<java.lang.Number>

Return issues that do not match the author id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#not_author_id DataGitlabProjectIssues#not_author_id}

---

##### `notLabels`<sup>Optional</sup> <a name="notLabels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.notLabels"></a>

- *Type:* java.util.List<java.lang.String>

Return issues that do not match the labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#not_labels DataGitlabProjectIssues#not_labels}

---

##### `notMilestone`<sup>Optional</sup> <a name="notMilestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.notMilestone"></a>

- *Type:* java.lang.String

Return issues that do not match the milestone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#not_milestone DataGitlabProjectIssues#not_milestone}

---

##### `notMyReactionEmoji`<sup>Optional</sup> <a name="notMyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.notMyReactionEmoji"></a>

- *Type:* java.util.List<java.lang.String>

Return issues not reacted by the authenticated user by the given emoji.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#not_my_reaction_emoji DataGitlabProjectIssues#not_my_reaction_emoji}

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.orderBy"></a>

- *Type:* java.lang.String

Return issues ordered by. Valid values are `created_at`, `updated_at`, `priority`, `due_date`, `relative_position`, `label_priority`, `milestone_due`, `popularity`, `weight`. Default is created_at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#order_by DataGitlabProjectIssues#order_by}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

Return issues for the given scope. Valid values are `created_by_me`, `assigned_to_me`, `all`. Defaults to all.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#scope DataGitlabProjectIssues#scope}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.search"></a>

- *Type:* java.lang.String

Search project issues against their title and description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#search DataGitlabProjectIssues#search}

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.sort"></a>

- *Type:* java.lang.String

Return issues sorted in asc or desc order. Default is desc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#sort DataGitlabProjectIssues#sort}

---

##### `updatedAfter`<sup>Optional</sup> <a name="updatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.updatedAfter"></a>

- *Type:* java.lang.String

Return issues updated on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#updated_after DataGitlabProjectIssues#updated_after}

---

##### `updatedBefore`<sup>Optional</sup> <a name="updatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.updatedBefore"></a>

- *Type:* java.lang.String

Return issues updated on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#updated_before DataGitlabProjectIssues#updated_before}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.weight"></a>

- *Type:* java.lang.Number

Return issues with the specified weight.

None returns issues with no weight assigned. Any returns issues with a weight assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#weight DataGitlabProjectIssues#weight}

---

##### `withLabelsDetails`<sup>Optional</sup> <a name="withLabelsDetails" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.withLabelsDetails"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the response returns more details for each label in labels field: :name, :color, :description, :description_html, :text_color.

Default is false. description_html was introduced in GitLab 12.7

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#with_labels_details DataGitlabProjectIssues#with_labels_details}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAssigneeId">resetAssigneeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAssigneeUsername">resetAssigneeUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAuthorId">resetAuthorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetConfidential">resetConfidential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetCreatedAfter">resetCreatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetCreatedBefore">resetCreatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetDueDate">resetDueDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetIids">resetIids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetIssueType">resetIssueType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetMilestone">resetMilestone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetMyReactionEmoji">resetMyReactionEmoji</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotAssigneeId">resetNotAssigneeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotAuthorId">resetNotAuthorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotLabels">resetNotLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotMilestone">resetNotMilestone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotMyReactionEmoji">resetNotMyReactionEmoji</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetOrderBy">resetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetSort">resetSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetUpdatedAfter">resetUpdatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetUpdatedBefore">resetUpdatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetWeight">resetWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetWithLabelsDetails">resetWithLabelsDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAssigneeId` <a name="resetAssigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAssigneeId"></a>

```java
public void resetAssigneeId()
```

##### `resetAssigneeUsername` <a name="resetAssigneeUsername" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAssigneeUsername"></a>

```java
public void resetAssigneeUsername()
```

##### `resetAuthorId` <a name="resetAuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAuthorId"></a>

```java
public void resetAuthorId()
```

##### `resetConfidential` <a name="resetConfidential" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetConfidential"></a>

```java
public void resetConfidential()
```

##### `resetCreatedAfter` <a name="resetCreatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetCreatedAfter"></a>

```java
public void resetCreatedAfter()
```

##### `resetCreatedBefore` <a name="resetCreatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetCreatedBefore"></a>

```java
public void resetCreatedBefore()
```

##### `resetDueDate` <a name="resetDueDate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetDueDate"></a>

```java
public void resetDueDate()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetId"></a>

```java
public void resetId()
```

##### `resetIids` <a name="resetIids" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetIids"></a>

```java
public void resetIids()
```

##### `resetIssueType` <a name="resetIssueType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetIssueType"></a>

```java
public void resetIssueType()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMilestone` <a name="resetMilestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetMilestone"></a>

```java
public void resetMilestone()
```

##### `resetMyReactionEmoji` <a name="resetMyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetMyReactionEmoji"></a>

```java
public void resetMyReactionEmoji()
```

##### `resetNotAssigneeId` <a name="resetNotAssigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotAssigneeId"></a>

```java
public void resetNotAssigneeId()
```

##### `resetNotAuthorId` <a name="resetNotAuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotAuthorId"></a>

```java
public void resetNotAuthorId()
```

##### `resetNotLabels` <a name="resetNotLabels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotLabels"></a>

```java
public void resetNotLabels()
```

##### `resetNotMilestone` <a name="resetNotMilestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotMilestone"></a>

```java
public void resetNotMilestone()
```

##### `resetNotMyReactionEmoji` <a name="resetNotMyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotMyReactionEmoji"></a>

```java
public void resetNotMyReactionEmoji()
```

##### `resetOrderBy` <a name="resetOrderBy" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetOrderBy"></a>

```java
public void resetOrderBy()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetScope"></a>

```java
public void resetScope()
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetSearch"></a>

```java
public void resetSearch()
```

##### `resetSort` <a name="resetSort" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetSort"></a>

```java
public void resetSort()
```

##### `resetUpdatedAfter` <a name="resetUpdatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetUpdatedAfter"></a>

```java
public void resetUpdatedAfter()
```

##### `resetUpdatedBefore` <a name="resetUpdatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetUpdatedBefore"></a>

```java
public void resetUpdatedBefore()
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetWeight"></a>

```java
public void resetWeight()
```

##### `resetWithLabelsDetails` <a name="resetWithLabelsDetails" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetWithLabelsDetails"></a>

```java
public void resetWithLabelsDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabProjectIssues resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_issues.DataGitlabProjectIssues;

DataGitlabProjectIssues.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_issues.DataGitlabProjectIssues;

DataGitlabProjectIssues.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_issues.DataGitlabProjectIssues;

DataGitlabProjectIssues.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_issues.DataGitlabProjectIssues;

DataGitlabProjectIssues.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGitlabProjectIssues.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGitlabProjectIssues resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGitlabProjectIssues to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGitlabProjectIssues that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProjectIssues to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issues">issues</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList">DataGitlabProjectIssuesIssuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeIdInput">assigneeIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeUsernameInput">assigneeUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.authorIdInput">authorIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.confidentialInput">confidentialInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdAfterInput">createdAfterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdBeforeInput">createdBeforeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dueDateInput">dueDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.iidsInput">iidsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issueTypeInput">issueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.labelsInput">labelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.milestoneInput">milestoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.myReactionEmojiInput">myReactionEmojiInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAssigneeIdInput">notAssigneeIdInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAuthorIdInput">notAuthorIdInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notLabelsInput">notLabelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMilestoneInput">notMilestoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMyReactionEmojiInput">notMyReactionEmojiInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.orderByInput">orderByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.searchInput">searchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.sortInput">sortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedAfterInput">updatedAfterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedBeforeInput">updatedBeforeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.withLabelsDetailsInput">withLabelsDetailsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeId">assigneeId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeUsername">assigneeUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.authorId">authorId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.confidential">confidential</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdAfter">createdAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdBefore">createdBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dueDate">dueDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.iids">iids</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issueType">issueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.milestone">milestone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.myReactionEmoji">myReactionEmoji</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAssigneeId">notAssigneeId</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAuthorId">notAuthorId</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notLabels">notLabels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMilestone">notMilestone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMyReactionEmoji">notMyReactionEmoji</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.orderBy">orderBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.search">search</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.sort">sort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedAfter">updatedAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedBefore">updatedBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.withLabelsDetails">withLabelsDetails</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `issues`<sup>Required</sup> <a name="issues" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issues"></a>

```java
public DataGitlabProjectIssuesIssuesList getIssues();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList">DataGitlabProjectIssuesIssuesList</a>

---

##### `assigneeIdInput`<sup>Optional</sup> <a name="assigneeIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeIdInput"></a>

```java
public java.lang.Number getAssigneeIdInput();
```

- *Type:* java.lang.Number

---

##### `assigneeUsernameInput`<sup>Optional</sup> <a name="assigneeUsernameInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeUsernameInput"></a>

```java
public java.lang.String getAssigneeUsernameInput();
```

- *Type:* java.lang.String

---

##### `authorIdInput`<sup>Optional</sup> <a name="authorIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.authorIdInput"></a>

```java
public java.lang.Number getAuthorIdInput();
```

- *Type:* java.lang.Number

---

##### `confidentialInput`<sup>Optional</sup> <a name="confidentialInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.confidentialInput"></a>

```java
public java.lang.Object getConfidentialInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createdAfterInput`<sup>Optional</sup> <a name="createdAfterInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdAfterInput"></a>

```java
public java.lang.String getCreatedAfterInput();
```

- *Type:* java.lang.String

---

##### `createdBeforeInput`<sup>Optional</sup> <a name="createdBeforeInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdBeforeInput"></a>

```java
public java.lang.String getCreatedBeforeInput();
```

- *Type:* java.lang.String

---

##### `dueDateInput`<sup>Optional</sup> <a name="dueDateInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dueDateInput"></a>

```java
public java.lang.String getDueDateInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `iidsInput`<sup>Optional</sup> <a name="iidsInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.iidsInput"></a>

```java
public java.util.List<java.lang.Number> getIidsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `issueTypeInput`<sup>Optional</sup> <a name="issueTypeInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issueTypeInput"></a>

```java
public java.lang.String getIssueTypeInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.labelsInput"></a>

```java
public java.util.List<java.lang.String> getLabelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `milestoneInput`<sup>Optional</sup> <a name="milestoneInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.milestoneInput"></a>

```java
public java.lang.String getMilestoneInput();
```

- *Type:* java.lang.String

---

##### `myReactionEmojiInput`<sup>Optional</sup> <a name="myReactionEmojiInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.myReactionEmojiInput"></a>

```java
public java.lang.String getMyReactionEmojiInput();
```

- *Type:* java.lang.String

---

##### `notAssigneeIdInput`<sup>Optional</sup> <a name="notAssigneeIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAssigneeIdInput"></a>

```java
public java.util.List<java.lang.Number> getNotAssigneeIdInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `notAuthorIdInput`<sup>Optional</sup> <a name="notAuthorIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAuthorIdInput"></a>

```java
public java.util.List<java.lang.Number> getNotAuthorIdInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `notLabelsInput`<sup>Optional</sup> <a name="notLabelsInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notLabelsInput"></a>

```java
public java.util.List<java.lang.String> getNotLabelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notMilestoneInput`<sup>Optional</sup> <a name="notMilestoneInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMilestoneInput"></a>

```java
public java.lang.String getNotMilestoneInput();
```

- *Type:* java.lang.String

---

##### `notMyReactionEmojiInput`<sup>Optional</sup> <a name="notMyReactionEmojiInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMyReactionEmojiInput"></a>

```java
public java.util.List<java.lang.String> getNotMyReactionEmojiInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `orderByInput`<sup>Optional</sup> <a name="orderByInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.orderByInput"></a>

```java
public java.lang.String getOrderByInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.searchInput"></a>

```java
public java.lang.String getSearchInput();
```

- *Type:* java.lang.String

---

##### `sortInput`<sup>Optional</sup> <a name="sortInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.sortInput"></a>

```java
public java.lang.String getSortInput();
```

- *Type:* java.lang.String

---

##### `updatedAfterInput`<sup>Optional</sup> <a name="updatedAfterInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedAfterInput"></a>

```java
public java.lang.String getUpdatedAfterInput();
```

- *Type:* java.lang.String

---

##### `updatedBeforeInput`<sup>Optional</sup> <a name="updatedBeforeInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedBeforeInput"></a>

```java
public java.lang.String getUpdatedBeforeInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `withLabelsDetailsInput`<sup>Optional</sup> <a name="withLabelsDetailsInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.withLabelsDetailsInput"></a>

```java
public java.lang.Object getWithLabelsDetailsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `assigneeId`<sup>Required</sup> <a name="assigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeId"></a>

```java
public java.lang.Number getAssigneeId();
```

- *Type:* java.lang.Number

---

##### `assigneeUsername`<sup>Required</sup> <a name="assigneeUsername" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeUsername"></a>

```java
public java.lang.String getAssigneeUsername();
```

- *Type:* java.lang.String

---

##### `authorId`<sup>Required</sup> <a name="authorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.authorId"></a>

```java
public java.lang.Number getAuthorId();
```

- *Type:* java.lang.Number

---

##### `confidential`<sup>Required</sup> <a name="confidential" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.confidential"></a>

```java
public java.lang.Object getConfidential();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createdAfter`<sup>Required</sup> <a name="createdAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdAfter"></a>

```java
public java.lang.String getCreatedAfter();
```

- *Type:* java.lang.String

---

##### `createdBefore`<sup>Required</sup> <a name="createdBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdBefore"></a>

```java
public java.lang.String getCreatedBefore();
```

- *Type:* java.lang.String

---

##### `dueDate`<sup>Required</sup> <a name="dueDate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dueDate"></a>

```java
public java.lang.String getDueDate();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `iids`<sup>Required</sup> <a name="iids" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.iids"></a>

```java
public java.util.List<java.lang.Number> getIids();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `issueType`<sup>Required</sup> <a name="issueType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issueType"></a>

```java
public java.lang.String getIssueType();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `milestone`<sup>Required</sup> <a name="milestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.milestone"></a>

```java
public java.lang.String getMilestone();
```

- *Type:* java.lang.String

---

##### `myReactionEmoji`<sup>Required</sup> <a name="myReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.myReactionEmoji"></a>

```java
public java.lang.String getMyReactionEmoji();
```

- *Type:* java.lang.String

---

##### `notAssigneeId`<sup>Required</sup> <a name="notAssigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAssigneeId"></a>

```java
public java.util.List<java.lang.Number> getNotAssigneeId();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `notAuthorId`<sup>Required</sup> <a name="notAuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAuthorId"></a>

```java
public java.util.List<java.lang.Number> getNotAuthorId();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `notLabels`<sup>Required</sup> <a name="notLabels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notLabels"></a>

```java
public java.util.List<java.lang.String> getNotLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notMilestone`<sup>Required</sup> <a name="notMilestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMilestone"></a>

```java
public java.lang.String getNotMilestone();
```

- *Type:* java.lang.String

---

##### `notMyReactionEmoji`<sup>Required</sup> <a name="notMyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMyReactionEmoji"></a>

```java
public java.util.List<java.lang.String> getNotMyReactionEmoji();
```

- *Type:* java.util.List<java.lang.String>

---

##### `orderBy`<sup>Required</sup> <a name="orderBy" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.orderBy"></a>

```java
public java.lang.String getOrderBy();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.sort"></a>

```java
public java.lang.String getSort();
```

- *Type:* java.lang.String

---

##### `updatedAfter`<sup>Required</sup> <a name="updatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedAfter"></a>

```java
public java.lang.String getUpdatedAfter();
```

- *Type:* java.lang.String

---

##### `updatedBefore`<sup>Required</sup> <a name="updatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedBefore"></a>

```java
public java.lang.String getUpdatedBefore();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `withLabelsDetails`<sup>Required</sup> <a name="withLabelsDetails" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.withLabelsDetails"></a>

```java
public java.lang.Object getWithLabelsDetails();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectIssuesConfig <a name="DataGitlabProjectIssuesConfig" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_issues.DataGitlabProjectIssuesConfig;

DataGitlabProjectIssuesConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .project(java.lang.String)
//  .assigneeId(java.lang.Number)
//  .assigneeUsername(java.lang.String)
//  .authorId(java.lang.Number)
//  .confidential(java.lang.Boolean)
//  .confidential(IResolvable)
//  .createdAfter(java.lang.String)
//  .createdBefore(java.lang.String)
//  .dueDate(java.lang.String)
//  .id(java.lang.String)
//  .iids(java.util.List<java.lang.Number>)
//  .issueType(java.lang.String)
//  .labels(java.util.List<java.lang.String>)
//  .milestone(java.lang.String)
//  .myReactionEmoji(java.lang.String)
//  .notAssigneeId(java.util.List<java.lang.Number>)
//  .notAuthorId(java.util.List<java.lang.Number>)
//  .notLabels(java.util.List<java.lang.String>)
//  .notMilestone(java.lang.String)
//  .notMyReactionEmoji(java.util.List<java.lang.String>)
//  .orderBy(java.lang.String)
//  .scope(java.lang.String)
//  .search(java.lang.String)
//  .sort(java.lang.String)
//  .updatedAfter(java.lang.String)
//  .updatedBefore(java.lang.String)
//  .weight(java.lang.Number)
//  .withLabelsDetails(java.lang.Boolean)
//  .withLabelsDetails(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.project">project</a></code> | <code>java.lang.String</code> | The name or id of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.assigneeId">assigneeId</a></code> | <code>java.lang.Number</code> | Return issues assigned to the given user id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.assigneeUsername">assigneeUsername</a></code> | <code>java.lang.String</code> | Return issues assigned to the given username. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.authorId">authorId</a></code> | <code>java.lang.Number</code> | Return issues created by the given user id. Combine with scope=all or scope=assigned_to_me. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.confidential">confidential</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Filter confidential or public issues. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.createdAfter">createdAfter</a></code> | <code>java.lang.String</code> | Return issues created on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.createdBefore">createdBefore</a></code> | <code>java.lang.String</code> | Return issues created on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.dueDate">dueDate</a></code> | <code>java.lang.String</code> | Return issues that have no due date, are overdue, or whose due date is this week, this month, or between two weeks ago and next month. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#id DataGitlabProjectIssues#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.iids">iids</a></code> | <code>java.util.List<java.lang.Number></code> | Return only the issues having the given iid. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.issueType">issueType</a></code> | <code>java.lang.String</code> | Filter to a given type of issue. Valid values are [issue incident test_case]. (Introduced in GitLab 13.12). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | Return issues with labels. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.milestone">milestone</a></code> | <code>java.lang.String</code> | The milestone title. None lists all issues with no milestone. Any lists all issues that have an assigned milestone. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.myReactionEmoji">myReactionEmoji</a></code> | <code>java.lang.String</code> | Return issues reacted by the authenticated user by the given emoji. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notAssigneeId">notAssigneeId</a></code> | <code>java.util.List<java.lang.Number></code> | Return issues that do not match the assignee id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notAuthorId">notAuthorId</a></code> | <code>java.util.List<java.lang.Number></code> | Return issues that do not match the author id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notLabels">notLabels</a></code> | <code>java.util.List<java.lang.String></code> | Return issues that do not match the labels. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notMilestone">notMilestone</a></code> | <code>java.lang.String</code> | Return issues that do not match the milestone. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notMyReactionEmoji">notMyReactionEmoji</a></code> | <code>java.util.List<java.lang.String></code> | Return issues not reacted by the authenticated user by the given emoji. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.orderBy">orderBy</a></code> | <code>java.lang.String</code> | Return issues ordered by. Valid values are `created_at`, `updated_at`, `priority`, `due_date`, `relative_position`, `label_priority`, `milestone_due`, `popularity`, `weight`. Default is created_at. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | Return issues for the given scope. Valid values are `created_by_me`, `assigned_to_me`, `all`. Defaults to all. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.search">search</a></code> | <code>java.lang.String</code> | Search project issues against their title and description. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.sort">sort</a></code> | <code>java.lang.String</code> | Return issues sorted in asc or desc order. Default is desc. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.updatedAfter">updatedAfter</a></code> | <code>java.lang.String</code> | Return issues updated on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.updatedBefore">updatedBefore</a></code> | <code>java.lang.String</code> | Return issues updated on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.weight">weight</a></code> | <code>java.lang.Number</code> | Return issues with the specified weight. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.withLabelsDetails">withLabelsDetails</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the response returns more details for each label in labels field: :name, :color, :description, :description_html, :text_color. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The name or id of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#project DataGitlabProjectIssues#project}

---

##### `assigneeId`<sup>Optional</sup> <a name="assigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.assigneeId"></a>

```java
public java.lang.Number getAssigneeId();
```

- *Type:* java.lang.Number

Return issues assigned to the given user id.

Mutually exclusive with assignee_username. None returns unassigned issues. Any returns issues with an assignee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#assignee_id DataGitlabProjectIssues#assignee_id}

---

##### `assigneeUsername`<sup>Optional</sup> <a name="assigneeUsername" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.assigneeUsername"></a>

```java
public java.lang.String getAssigneeUsername();
```

- *Type:* java.lang.String

Return issues assigned to the given username.

Similar to assignee_id and mutually exclusive with assignee_id. In GitLab CE, the assignee_username array should only contain a single value. Otherwise, an invalid parameter error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#assignee_username DataGitlabProjectIssues#assignee_username}

---

##### `authorId`<sup>Optional</sup> <a name="authorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.authorId"></a>

```java
public java.lang.Number getAuthorId();
```

- *Type:* java.lang.Number

Return issues created by the given user id. Combine with scope=all or scope=assigned_to_me.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#author_id DataGitlabProjectIssues#author_id}

---

##### `confidential`<sup>Optional</sup> <a name="confidential" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.confidential"></a>

```java
public java.lang.Object getConfidential();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Filter confidential or public issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#confidential DataGitlabProjectIssues#confidential}

---

##### `createdAfter`<sup>Optional</sup> <a name="createdAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.createdAfter"></a>

```java
public java.lang.String getCreatedAfter();
```

- *Type:* java.lang.String

Return issues created on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#created_after DataGitlabProjectIssues#created_after}

---

##### `createdBefore`<sup>Optional</sup> <a name="createdBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.createdBefore"></a>

```java
public java.lang.String getCreatedBefore();
```

- *Type:* java.lang.String

Return issues created on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#created_before DataGitlabProjectIssues#created_before}

---

##### `dueDate`<sup>Optional</sup> <a name="dueDate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.dueDate"></a>

```java
public java.lang.String getDueDate();
```

- *Type:* java.lang.String

Return issues that have no due date, are overdue, or whose due date is this week, this month, or between two weeks ago and next month.

Accepts: 0 (no due date), any, today, tomorrow, overdue, week, month, next_month_and_previous_two_weeks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#due_date DataGitlabProjectIssues#due_date}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#id DataGitlabProjectIssues#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iids`<sup>Optional</sup> <a name="iids" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.iids"></a>

```java
public java.util.List<java.lang.Number> getIids();
```

- *Type:* java.util.List<java.lang.Number>

Return only the issues having the given iid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#iids DataGitlabProjectIssues#iids}

---

##### `issueType`<sup>Optional</sup> <a name="issueType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.issueType"></a>

```java
public java.lang.String getIssueType();
```

- *Type:* java.lang.String

Filter to a given type of issue. Valid values are [issue incident test_case]. (Introduced in GitLab 13.12).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#issue_type DataGitlabProjectIssues#issue_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

Return issues with labels.

Issues must have all labels to be returned. None lists all issues with no labels. Any lists all issues with at least one label. No+Label (Deprecated) lists all issues with no labels. Predefined names are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#labels DataGitlabProjectIssues#labels}

---

##### `milestone`<sup>Optional</sup> <a name="milestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.milestone"></a>

```java
public java.lang.String getMilestone();
```

- *Type:* java.lang.String

The milestone title. None lists all issues with no milestone. Any lists all issues that have an assigned milestone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#milestone DataGitlabProjectIssues#milestone}

---

##### `myReactionEmoji`<sup>Optional</sup> <a name="myReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.myReactionEmoji"></a>

```java
public java.lang.String getMyReactionEmoji();
```

- *Type:* java.lang.String

Return issues reacted by the authenticated user by the given emoji.

None returns issues not given a reaction. Any returns issues given at least one reaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#my_reaction_emoji DataGitlabProjectIssues#my_reaction_emoji}

---

##### `notAssigneeId`<sup>Optional</sup> <a name="notAssigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notAssigneeId"></a>

```java
public java.util.List<java.lang.Number> getNotAssigneeId();
```

- *Type:* java.util.List<java.lang.Number>

Return issues that do not match the assignee id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#not_assignee_id DataGitlabProjectIssues#not_assignee_id}

---

##### `notAuthorId`<sup>Optional</sup> <a name="notAuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notAuthorId"></a>

```java
public java.util.List<java.lang.Number> getNotAuthorId();
```

- *Type:* java.util.List<java.lang.Number>

Return issues that do not match the author id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#not_author_id DataGitlabProjectIssues#not_author_id}

---

##### `notLabels`<sup>Optional</sup> <a name="notLabels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notLabels"></a>

```java
public java.util.List<java.lang.String> getNotLabels();
```

- *Type:* java.util.List<java.lang.String>

Return issues that do not match the labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#not_labels DataGitlabProjectIssues#not_labels}

---

##### `notMilestone`<sup>Optional</sup> <a name="notMilestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notMilestone"></a>

```java
public java.lang.String getNotMilestone();
```

- *Type:* java.lang.String

Return issues that do not match the milestone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#not_milestone DataGitlabProjectIssues#not_milestone}

---

##### `notMyReactionEmoji`<sup>Optional</sup> <a name="notMyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notMyReactionEmoji"></a>

```java
public java.util.List<java.lang.String> getNotMyReactionEmoji();
```

- *Type:* java.util.List<java.lang.String>

Return issues not reacted by the authenticated user by the given emoji.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#not_my_reaction_emoji DataGitlabProjectIssues#not_my_reaction_emoji}

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.orderBy"></a>

```java
public java.lang.String getOrderBy();
```

- *Type:* java.lang.String

Return issues ordered by. Valid values are `created_at`, `updated_at`, `priority`, `due_date`, `relative_position`, `label_priority`, `milestone_due`, `popularity`, `weight`. Default is created_at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#order_by DataGitlabProjectIssues#order_by}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Return issues for the given scope. Valid values are `created_by_me`, `assigned_to_me`, `all`. Defaults to all.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#scope DataGitlabProjectIssues#scope}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

Search project issues against their title and description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#search DataGitlabProjectIssues#search}

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.sort"></a>

```java
public java.lang.String getSort();
```

- *Type:* java.lang.String

Return issues sorted in asc or desc order. Default is desc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#sort DataGitlabProjectIssues#sort}

---

##### `updatedAfter`<sup>Optional</sup> <a name="updatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.updatedAfter"></a>

```java
public java.lang.String getUpdatedAfter();
```

- *Type:* java.lang.String

Return issues updated on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#updated_after DataGitlabProjectIssues#updated_after}

---

##### `updatedBefore`<sup>Optional</sup> <a name="updatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.updatedBefore"></a>

```java
public java.lang.String getUpdatedBefore();
```

- *Type:* java.lang.String

Return issues updated on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#updated_before DataGitlabProjectIssues#updated_before}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Return issues with the specified weight.

None returns issues with no weight assigned. Any returns issues with a weight assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#weight DataGitlabProjectIssues#weight}

---

##### `withLabelsDetails`<sup>Optional</sup> <a name="withLabelsDetails" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.withLabelsDetails"></a>

```java
public java.lang.Object getWithLabelsDetails();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the response returns more details for each label in labels field: :name, :color, :description, :description_html, :text_color.

Default is false. description_html was introduced in GitLab 12.7

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.5.0/docs/data-sources/project_issues#with_labels_details DataGitlabProjectIssues#with_labels_details}

---

### DataGitlabProjectIssuesIssues <a name="DataGitlabProjectIssuesIssues" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_issues.DataGitlabProjectIssuesIssues;

DataGitlabProjectIssuesIssues.builder()
    .build();
```


### DataGitlabProjectIssuesIssuesTaskCompletionStatus <a name="DataGitlabProjectIssuesIssuesTaskCompletionStatus" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_issues.DataGitlabProjectIssuesIssuesTaskCompletionStatus;

DataGitlabProjectIssuesIssuesTaskCompletionStatus.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectIssuesIssuesList <a name="DataGitlabProjectIssuesIssuesList" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_issues.DataGitlabProjectIssuesIssuesList;

new DataGitlabProjectIssuesIssuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.get"></a>

```java
public DataGitlabProjectIssuesIssuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGitlabProjectIssuesIssuesOutputReference <a name="DataGitlabProjectIssuesIssuesOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_issues.DataGitlabProjectIssuesIssuesOutputReference;

new DataGitlabProjectIssuesIssuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.assigneeIds">assigneeIds</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.authorId">authorId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.closedAt">closedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.closedByUserId">closedByUserId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.confidential">confidential</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.discussionLocked">discussionLocked</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.discussionToResolve">discussionToResolve</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.downvotes">downvotes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.dueDate">dueDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.epicId">epicId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.epicIssueId">epicIssueId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.humanTimeEstimate">humanTimeEstimate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.humanTotalTimeSpent">humanTotalTimeSpent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.iid">iid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueId">issueId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueLinkId">issueLinkId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueType">issueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.links">links</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.mergeRequestsCount">mergeRequestsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.mergeRequestToResolveDiscussionsOf">mergeRequestToResolveDiscussionsOf</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.milestoneId">milestoneId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.movedToId">movedToId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.references">references</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.subscribed">subscribed</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.taskCompletionStatus">taskCompletionStatus</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList">DataGitlabProjectIssuesIssuesTaskCompletionStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.timeEstimate">timeEstimate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.totalTimeSpent">totalTimeSpent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.upvotes">upvotes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.userNotesCount">userNotesCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.webUrl">webUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssues">DataGitlabProjectIssuesIssues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assigneeIds`<sup>Required</sup> <a name="assigneeIds" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.assigneeIds"></a>

```java
public java.util.List<java.lang.Number> getAssigneeIds();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `authorId`<sup>Required</sup> <a name="authorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.authorId"></a>

```java
public java.lang.Number getAuthorId();
```

- *Type:* java.lang.Number

---

##### `closedAt`<sup>Required</sup> <a name="closedAt" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.closedAt"></a>

```java
public java.lang.String getClosedAt();
```

- *Type:* java.lang.String

---

##### `closedByUserId`<sup>Required</sup> <a name="closedByUserId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.closedByUserId"></a>

```java
public java.lang.Number getClosedByUserId();
```

- *Type:* java.lang.Number

---

##### `confidential`<sup>Required</sup> <a name="confidential" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.confidential"></a>

```java
public IResolvable getConfidential();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `discussionLocked`<sup>Required</sup> <a name="discussionLocked" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.discussionLocked"></a>

```java
public IResolvable getDiscussionLocked();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `discussionToResolve`<sup>Required</sup> <a name="discussionToResolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.discussionToResolve"></a>

```java
public java.lang.String getDiscussionToResolve();
```

- *Type:* java.lang.String

---

##### `downvotes`<sup>Required</sup> <a name="downvotes" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.downvotes"></a>

```java
public java.lang.Number getDownvotes();
```

- *Type:* java.lang.Number

---

##### `dueDate`<sup>Required</sup> <a name="dueDate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.dueDate"></a>

```java
public java.lang.String getDueDate();
```

- *Type:* java.lang.String

---

##### `epicId`<sup>Required</sup> <a name="epicId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.epicId"></a>

```java
public java.lang.Number getEpicId();
```

- *Type:* java.lang.Number

---

##### `epicIssueId`<sup>Required</sup> <a name="epicIssueId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.epicIssueId"></a>

```java
public java.lang.Number getEpicIssueId();
```

- *Type:* java.lang.Number

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `humanTimeEstimate`<sup>Required</sup> <a name="humanTimeEstimate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.humanTimeEstimate"></a>

```java
public java.lang.String getHumanTimeEstimate();
```

- *Type:* java.lang.String

---

##### `humanTotalTimeSpent`<sup>Required</sup> <a name="humanTotalTimeSpent" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.humanTotalTimeSpent"></a>

```java
public java.lang.String getHumanTotalTimeSpent();
```

- *Type:* java.lang.String

---

##### `iid`<sup>Required</sup> <a name="iid" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.iid"></a>

```java
public java.lang.Number getIid();
```

- *Type:* java.lang.Number

---

##### `issueId`<sup>Required</sup> <a name="issueId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueId"></a>

```java
public java.lang.Number getIssueId();
```

- *Type:* java.lang.Number

---

##### `issueLinkId`<sup>Required</sup> <a name="issueLinkId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueLinkId"></a>

```java
public java.lang.Number getIssueLinkId();
```

- *Type:* java.lang.Number

---

##### `issueType`<sup>Required</sup> <a name="issueType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueType"></a>

```java
public java.lang.String getIssueType();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.links"></a>

```java
public StringMap getLinks();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `mergeRequestsCount`<sup>Required</sup> <a name="mergeRequestsCount" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.mergeRequestsCount"></a>

```java
public java.lang.Number getMergeRequestsCount();
```

- *Type:* java.lang.Number

---

##### `mergeRequestToResolveDiscussionsOf`<sup>Required</sup> <a name="mergeRequestToResolveDiscussionsOf" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.mergeRequestToResolveDiscussionsOf"></a>

```java
public java.lang.Number getMergeRequestToResolveDiscussionsOf();
```

- *Type:* java.lang.Number

---

##### `milestoneId`<sup>Required</sup> <a name="milestoneId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.milestoneId"></a>

```java
public java.lang.Number getMilestoneId();
```

- *Type:* java.lang.Number

---

##### `movedToId`<sup>Required</sup> <a name="movedToId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.movedToId"></a>

```java
public java.lang.Number getMovedToId();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `references`<sup>Required</sup> <a name="references" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.references"></a>

```java
public StringMap getReferences();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subscribed`<sup>Required</sup> <a name="subscribed" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.subscribed"></a>

```java
public IResolvable getSubscribed();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `taskCompletionStatus`<sup>Required</sup> <a name="taskCompletionStatus" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.taskCompletionStatus"></a>

```java
public DataGitlabProjectIssuesIssuesTaskCompletionStatusList getTaskCompletionStatus();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList">DataGitlabProjectIssuesIssuesTaskCompletionStatusList</a>

---

##### `timeEstimate`<sup>Required</sup> <a name="timeEstimate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.timeEstimate"></a>

```java
public java.lang.Number getTimeEstimate();
```

- *Type:* java.lang.Number

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `totalTimeSpent`<sup>Required</sup> <a name="totalTimeSpent" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.totalTimeSpent"></a>

```java
public java.lang.Number getTotalTimeSpent();
```

- *Type:* java.lang.Number

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `upvotes`<sup>Required</sup> <a name="upvotes" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.upvotes"></a>

```java
public java.lang.Number getUpvotes();
```

- *Type:* java.lang.Number

---

##### `userNotesCount`<sup>Required</sup> <a name="userNotesCount" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.userNotesCount"></a>

```java
public java.lang.Number getUserNotesCount();
```

- *Type:* java.lang.Number

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.webUrl"></a>

```java
public java.lang.String getWebUrl();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.internalValue"></a>

```java
public DataGitlabProjectIssuesIssues getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssues">DataGitlabProjectIssuesIssues</a>

---


### DataGitlabProjectIssuesIssuesTaskCompletionStatusList <a name="DataGitlabProjectIssuesIssuesTaskCompletionStatusList" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_issues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList;

new DataGitlabProjectIssuesIssuesTaskCompletionStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.get"></a>

```java
public DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference <a name="DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.data_gitlab_project_issues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference;

new DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.completedCount">completedCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatus">DataGitlabProjectIssuesIssuesTaskCompletionStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `completedCount`<sup>Required</sup> <a name="completedCount" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.completedCount"></a>

```java
public java.lang.Number getCompletedCount();
```

- *Type:* java.lang.Number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.internalValue"></a>

```java
public DataGitlabProjectIssuesIssuesTaskCompletionStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatus">DataGitlabProjectIssuesIssuesTaskCompletionStatus</a>

---



