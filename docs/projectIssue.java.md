# `projectIssue` Submodule <a name="`projectIssue` Submodule" id="@cdktf/provider-gitlab.projectIssue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIssue <a name="ProjectIssue" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue gitlab_project_issue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_issue.ProjectIssue;

ProjectIssue.Builder.create(Construct scope, java.lang.String id)
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
    .title(java.lang.String)
//  .assigneeIds(java.util.List<java.lang.Number>)
//  .confidential(java.lang.Boolean)
//  .confidential(IResolvable)
//  .createdAt(java.lang.String)
//  .deleteOnDestroy(java.lang.Boolean)
//  .deleteOnDestroy(IResolvable)
//  .description(java.lang.String)
//  .discussionLocked(java.lang.Boolean)
//  .discussionLocked(IResolvable)
//  .discussionToResolve(java.lang.String)
//  .dueDate(java.lang.String)
//  .epicIssueId(java.lang.Number)
//  .id(java.lang.String)
//  .iid(java.lang.Number)
//  .issueType(java.lang.String)
//  .labels(java.util.List<java.lang.String>)
//  .mergeRequestToResolveDiscussionsOf(java.lang.Number)
//  .milestoneId(java.lang.Number)
//  .state(java.lang.String)
//  .updatedAt(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The name or ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | The title of the issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.assigneeIds">assigneeIds</a></code> | <code>java.util.List<java.lang.Number></code> | The IDs of the users to assign the issue to. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.confidential">confidential</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set an issue to be confidential. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.createdAt">createdAt</a></code> | <code>java.lang.String</code> | When the issue was created. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.deleteOnDestroy">deleteOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the issue is deleted instead of closed during destroy. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of an issue. Limited to 1,048,576 characters. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.discussionLocked">discussionLocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the issue is locked for discussions or not. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.discussionToResolve">discussionToResolve</a></code> | <code>java.lang.String</code> | The ID of a discussion to resolve. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.dueDate">dueDate</a></code> | <code>java.lang.String</code> | The due date. Date time string in the format YYYY-MM-DD, for example 2016-03-11. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.epicIssueId">epicIssueId</a></code> | <code>java.lang.Number</code> | The ID of the epic issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#id ProjectIssue#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.iid">iid</a></code> | <code>java.lang.Number</code> | The internal ID of the project's issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.issueType">issueType</a></code> | <code>java.lang.String</code> | The type of issue. Valid values are: `issue`, `incident`, `test_case`. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | The labels of an issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.mergeRequestToResolveDiscussionsOf">mergeRequestToResolveDiscussionsOf</a></code> | <code>java.lang.Number</code> | The IID of a merge request in which to resolve all issues. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.milestoneId">milestoneId</a></code> | <code>java.lang.Number</code> | The global ID of a milestone to assign issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | The state of the issue. Valid values are: `opened`, `closed`. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | When the issue was updated. Date time string, ISO 8601 formatted, for example 2016-03-11T03:45:40Z. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.weight">weight</a></code> | <code>java.lang.Number</code> | The weight of the issue. Valid values are greater than or equal to 0. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The name or ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#project ProjectIssue#project}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.title"></a>

- *Type:* java.lang.String

The title of the issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#title ProjectIssue#title}

---

##### `assigneeIds`<sup>Optional</sup> <a name="assigneeIds" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.assigneeIds"></a>

- *Type:* java.util.List<java.lang.Number>

The IDs of the users to assign the issue to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#assignee_ids ProjectIssue#assignee_ids}

---

##### `confidential`<sup>Optional</sup> <a name="confidential" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.confidential"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set an issue to be confidential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#confidential ProjectIssue#confidential}

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.createdAt"></a>

- *Type:* java.lang.String

When the issue was created.

Date time string, ISO 8601 formatted, for example 2016-03-11T03:45:40Z. Requires administrator or project/group owner rights.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#created_at ProjectIssue#created_at}

---

##### `deleteOnDestroy`<sup>Optional</sup> <a name="deleteOnDestroy" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.deleteOnDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the issue is deleted instead of closed during destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#delete_on_destroy ProjectIssue#delete_on_destroy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of an issue. Limited to 1,048,576 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#description ProjectIssue#description}

---

##### `discussionLocked`<sup>Optional</sup> <a name="discussionLocked" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.discussionLocked"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the issue is locked for discussions or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#discussion_locked ProjectIssue#discussion_locked}

---

##### `discussionToResolve`<sup>Optional</sup> <a name="discussionToResolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.discussionToResolve"></a>

- *Type:* java.lang.String

The ID of a discussion to resolve.

This fills out the issue with a default description and mark the discussion as resolved. Use in combination with merge_request_to_resolve_discussions_of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#discussion_to_resolve ProjectIssue#discussion_to_resolve}

---

##### `dueDate`<sup>Optional</sup> <a name="dueDate" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.dueDate"></a>

- *Type:* java.lang.String

The due date. Date time string in the format YYYY-MM-DD, for example 2016-03-11.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#due_date ProjectIssue#due_date}

---

##### `epicIssueId`<sup>Optional</sup> <a name="epicIssueId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.epicIssueId"></a>

- *Type:* java.lang.Number

The ID of the epic issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#epic_issue_id ProjectIssue#epic_issue_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#id ProjectIssue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iid`<sup>Optional</sup> <a name="iid" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.iid"></a>

- *Type:* java.lang.Number

The internal ID of the project's issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#iid ProjectIssue#iid}

---

##### `issueType`<sup>Optional</sup> <a name="issueType" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.issueType"></a>

- *Type:* java.lang.String

The type of issue. Valid values are: `issue`, `incident`, `test_case`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#issue_type ProjectIssue#issue_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.labels"></a>

- *Type:* java.util.List<java.lang.String>

The labels of an issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#labels ProjectIssue#labels}

---

##### `mergeRequestToResolveDiscussionsOf`<sup>Optional</sup> <a name="mergeRequestToResolveDiscussionsOf" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.mergeRequestToResolveDiscussionsOf"></a>

- *Type:* java.lang.Number

The IID of a merge request in which to resolve all issues.

This fills out the issue with a default description and mark all discussions as resolved. When passing a description or title, these values take precedence over the default values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#merge_request_to_resolve_discussions_of ProjectIssue#merge_request_to_resolve_discussions_of}

---

##### `milestoneId`<sup>Optional</sup> <a name="milestoneId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.milestoneId"></a>

- *Type:* java.lang.Number

The global ID of a milestone to assign issue.

To find the milestone_id associated with a milestone, view an issue with the milestone assigned and use the API to retrieve the issue's details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#milestone_id ProjectIssue#milestone_id}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.state"></a>

- *Type:* java.lang.String

The state of the issue. Valid values are: `opened`, `closed`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#state ProjectIssue#state}

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.updatedAt"></a>

- *Type:* java.lang.String

When the issue was updated. Date time string, ISO 8601 formatted, for example 2016-03-11T03:45:40Z.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#updated_at ProjectIssue#updated_at}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.weight"></a>

- *Type:* java.lang.Number

The weight of the issue. Valid values are greater than or equal to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#weight ProjectIssue#weight}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetAssigneeIds">resetAssigneeIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetConfidential">resetConfidential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDeleteOnDestroy">resetDeleteOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDiscussionLocked">resetDiscussionLocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDiscussionToResolve">resetDiscussionToResolve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDueDate">resetDueDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetEpicIssueId">resetEpicIssueId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetIid">resetIid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetIssueType">resetIssueType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetMergeRequestToResolveDiscussionsOf">resetMergeRequestToResolveDiscussionsOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetMilestoneId">resetMilestoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetUpdatedAt">resetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAssigneeIds` <a name="resetAssigneeIds" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetAssigneeIds"></a>

```java
public void resetAssigneeIds()
```

##### `resetConfidential` <a name="resetConfidential" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetConfidential"></a>

```java
public void resetConfidential()
```

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetCreatedAt"></a>

```java
public void resetCreatedAt()
```

##### `resetDeleteOnDestroy` <a name="resetDeleteOnDestroy" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDeleteOnDestroy"></a>

```java
public void resetDeleteOnDestroy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDiscussionLocked` <a name="resetDiscussionLocked" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDiscussionLocked"></a>

```java
public void resetDiscussionLocked()
```

##### `resetDiscussionToResolve` <a name="resetDiscussionToResolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDiscussionToResolve"></a>

```java
public void resetDiscussionToResolve()
```

##### `resetDueDate` <a name="resetDueDate" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDueDate"></a>

```java
public void resetDueDate()
```

##### `resetEpicIssueId` <a name="resetEpicIssueId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetEpicIssueId"></a>

```java
public void resetEpicIssueId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetId"></a>

```java
public void resetId()
```

##### `resetIid` <a name="resetIid" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetIid"></a>

```java
public void resetIid()
```

##### `resetIssueType` <a name="resetIssueType" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetIssueType"></a>

```java
public void resetIssueType()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMergeRequestToResolveDiscussionsOf` <a name="resetMergeRequestToResolveDiscussionsOf" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetMergeRequestToResolveDiscussionsOf"></a>

```java
public void resetMergeRequestToResolveDiscussionsOf()
```

##### `resetMilestoneId` <a name="resetMilestoneId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetMilestoneId"></a>

```java
public void resetMilestoneId()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetState"></a>

```java
public void resetState()
```

##### `resetUpdatedAt` <a name="resetUpdatedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetUpdatedAt"></a>

```java
public void resetUpdatedAt()
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetWeight"></a>

```java
public void resetWeight()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIssue resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_issue.ProjectIssue;

ProjectIssue.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_issue.ProjectIssue;

ProjectIssue.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_issue.ProjectIssue;

ProjectIssue.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_issue.ProjectIssue;

ProjectIssue.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ProjectIssue.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ProjectIssue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ProjectIssue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ProjectIssue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIssue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.authorId">authorId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.closedAt">closedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.closedByUserId">closedByUserId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.downvotes">downvotes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicId">epicId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.humanTimeEstimate">humanTimeEstimate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.humanTotalTimeSpent">humanTotalTimeSpent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueId">issueId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueLinkId">issueLinkId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.links">links</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestsCount">mergeRequestsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.movedToId">movedToId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.references">references</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.subscribed">subscribed</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.taskCompletionStatus">taskCompletionStatus</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList">ProjectIssueTaskCompletionStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.timeEstimate">timeEstimate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.totalTimeSpent">totalTimeSpent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.upvotes">upvotes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.userNotesCount">userNotesCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.webUrl">webUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.assigneeIdsInput">assigneeIdsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.confidentialInput">confidentialInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.createdAtInput">createdAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.deleteOnDestroyInput">deleteOnDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionLockedInput">discussionLockedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionToResolveInput">discussionToResolveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dueDateInput">dueDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicIssueIdInput">epicIssueIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.iidInput">iidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueTypeInput">issueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.labelsInput">labelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestToResolveDiscussionsOfInput">mergeRequestToResolveDiscussionsOfInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.milestoneIdInput">milestoneIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.updatedAtInput">updatedAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.assigneeIds">assigneeIds</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.confidential">confidential</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.deleteOnDestroy">deleteOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionLocked">discussionLocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionToResolve">discussionToResolve</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dueDate">dueDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicIssueId">epicIssueId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.iid">iid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueType">issueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestToResolveDiscussionsOf">mergeRequestToResolveDiscussionsOf</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.milestoneId">milestoneId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorId`<sup>Required</sup> <a name="authorId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.authorId"></a>

```java
public java.lang.Number getAuthorId();
```

- *Type:* java.lang.Number

---

##### `closedAt`<sup>Required</sup> <a name="closedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.closedAt"></a>

```java
public java.lang.String getClosedAt();
```

- *Type:* java.lang.String

---

##### `closedByUserId`<sup>Required</sup> <a name="closedByUserId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.closedByUserId"></a>

```java
public java.lang.Number getClosedByUserId();
```

- *Type:* java.lang.Number

---

##### `downvotes`<sup>Required</sup> <a name="downvotes" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.downvotes"></a>

```java
public java.lang.Number getDownvotes();
```

- *Type:* java.lang.Number

---

##### `epicId`<sup>Required</sup> <a name="epicId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicId"></a>

```java
public java.lang.Number getEpicId();
```

- *Type:* java.lang.Number

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `humanTimeEstimate`<sup>Required</sup> <a name="humanTimeEstimate" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.humanTimeEstimate"></a>

```java
public java.lang.String getHumanTimeEstimate();
```

- *Type:* java.lang.String

---

##### `humanTotalTimeSpent`<sup>Required</sup> <a name="humanTotalTimeSpent" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.humanTotalTimeSpent"></a>

```java
public java.lang.String getHumanTotalTimeSpent();
```

- *Type:* java.lang.String

---

##### `issueId`<sup>Required</sup> <a name="issueId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueId"></a>

```java
public java.lang.Number getIssueId();
```

- *Type:* java.lang.Number

---

##### `issueLinkId`<sup>Required</sup> <a name="issueLinkId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueLinkId"></a>

```java
public java.lang.Number getIssueLinkId();
```

- *Type:* java.lang.Number

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.links"></a>

```java
public StringMap getLinks();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `mergeRequestsCount`<sup>Required</sup> <a name="mergeRequestsCount" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestsCount"></a>

```java
public java.lang.Number getMergeRequestsCount();
```

- *Type:* java.lang.Number

---

##### `movedToId`<sup>Required</sup> <a name="movedToId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.movedToId"></a>

```java
public java.lang.Number getMovedToId();
```

- *Type:* java.lang.Number

---

##### `references`<sup>Required</sup> <a name="references" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.references"></a>

```java
public StringMap getReferences();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `subscribed`<sup>Required</sup> <a name="subscribed" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.subscribed"></a>

```java
public IResolvable getSubscribed();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `taskCompletionStatus`<sup>Required</sup> <a name="taskCompletionStatus" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.taskCompletionStatus"></a>

```java
public ProjectIssueTaskCompletionStatusList getTaskCompletionStatus();
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList">ProjectIssueTaskCompletionStatusList</a>

---

##### `timeEstimate`<sup>Required</sup> <a name="timeEstimate" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.timeEstimate"></a>

```java
public java.lang.Number getTimeEstimate();
```

- *Type:* java.lang.Number

---

##### `totalTimeSpent`<sup>Required</sup> <a name="totalTimeSpent" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.totalTimeSpent"></a>

```java
public java.lang.Number getTotalTimeSpent();
```

- *Type:* java.lang.Number

---

##### `upvotes`<sup>Required</sup> <a name="upvotes" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.upvotes"></a>

```java
public java.lang.Number getUpvotes();
```

- *Type:* java.lang.Number

---

##### `userNotesCount`<sup>Required</sup> <a name="userNotesCount" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.userNotesCount"></a>

```java
public java.lang.Number getUserNotesCount();
```

- *Type:* java.lang.Number

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.webUrl"></a>

```java
public java.lang.String getWebUrl();
```

- *Type:* java.lang.String

---

##### `assigneeIdsInput`<sup>Optional</sup> <a name="assigneeIdsInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.assigneeIdsInput"></a>

```java
public java.util.List<java.lang.Number> getAssigneeIdsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `confidentialInput`<sup>Optional</sup> <a name="confidentialInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.confidentialInput"></a>

```java
public java.lang.Object getConfidentialInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.createdAtInput"></a>

```java
public java.lang.String getCreatedAtInput();
```

- *Type:* java.lang.String

---

##### `deleteOnDestroyInput`<sup>Optional</sup> <a name="deleteOnDestroyInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.deleteOnDestroyInput"></a>

```java
public java.lang.Object getDeleteOnDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `discussionLockedInput`<sup>Optional</sup> <a name="discussionLockedInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionLockedInput"></a>

```java
public java.lang.Object getDiscussionLockedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `discussionToResolveInput`<sup>Optional</sup> <a name="discussionToResolveInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionToResolveInput"></a>

```java
public java.lang.String getDiscussionToResolveInput();
```

- *Type:* java.lang.String

---

##### `dueDateInput`<sup>Optional</sup> <a name="dueDateInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dueDateInput"></a>

```java
public java.lang.String getDueDateInput();
```

- *Type:* java.lang.String

---

##### `epicIssueIdInput`<sup>Optional</sup> <a name="epicIssueIdInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicIssueIdInput"></a>

```java
public java.lang.Number getEpicIssueIdInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `iidInput`<sup>Optional</sup> <a name="iidInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.iidInput"></a>

```java
public java.lang.Number getIidInput();
```

- *Type:* java.lang.Number

---

##### `issueTypeInput`<sup>Optional</sup> <a name="issueTypeInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueTypeInput"></a>

```java
public java.lang.String getIssueTypeInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.labelsInput"></a>

```java
public java.util.List<java.lang.String> getLabelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mergeRequestToResolveDiscussionsOfInput`<sup>Optional</sup> <a name="mergeRequestToResolveDiscussionsOfInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestToResolveDiscussionsOfInput"></a>

```java
public java.lang.Number getMergeRequestToResolveDiscussionsOfInput();
```

- *Type:* java.lang.Number

---

##### `milestoneIdInput`<sup>Optional</sup> <a name="milestoneIdInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.milestoneIdInput"></a>

```java
public java.lang.Number getMilestoneIdInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `updatedAtInput`<sup>Optional</sup> <a name="updatedAtInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.updatedAtInput"></a>

```java
public java.lang.String getUpdatedAtInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `assigneeIds`<sup>Required</sup> <a name="assigneeIds" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.assigneeIds"></a>

```java
public java.util.List<java.lang.Number> getAssigneeIds();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `confidential`<sup>Required</sup> <a name="confidential" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.confidential"></a>

```java
public java.lang.Object getConfidential();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `deleteOnDestroy`<sup>Required</sup> <a name="deleteOnDestroy" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.deleteOnDestroy"></a>

```java
public java.lang.Object getDeleteOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `discussionLocked`<sup>Required</sup> <a name="discussionLocked" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionLocked"></a>

```java
public java.lang.Object getDiscussionLocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `discussionToResolve`<sup>Required</sup> <a name="discussionToResolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionToResolve"></a>

```java
public java.lang.String getDiscussionToResolve();
```

- *Type:* java.lang.String

---

##### `dueDate`<sup>Required</sup> <a name="dueDate" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dueDate"></a>

```java
public java.lang.String getDueDate();
```

- *Type:* java.lang.String

---

##### `epicIssueId`<sup>Required</sup> <a name="epicIssueId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicIssueId"></a>

```java
public java.lang.Number getEpicIssueId();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `iid`<sup>Required</sup> <a name="iid" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.iid"></a>

```java
public java.lang.Number getIid();
```

- *Type:* java.lang.Number

---

##### `issueType`<sup>Required</sup> <a name="issueType" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueType"></a>

```java
public java.lang.String getIssueType();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mergeRequestToResolveDiscussionsOf`<sup>Required</sup> <a name="mergeRequestToResolveDiscussionsOf" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestToResolveDiscussionsOf"></a>

```java
public java.lang.Number getMergeRequestToResolveDiscussionsOf();
```

- *Type:* java.lang.Number

---

##### `milestoneId`<sup>Required</sup> <a name="milestoneId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.milestoneId"></a>

```java
public java.lang.Number getMilestoneId();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIssueConfig <a name="ProjectIssueConfig" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_issue.ProjectIssueConfig;

ProjectIssueConfig.builder()
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
    .title(java.lang.String)
//  .assigneeIds(java.util.List<java.lang.Number>)
//  .confidential(java.lang.Boolean)
//  .confidential(IResolvable)
//  .createdAt(java.lang.String)
//  .deleteOnDestroy(java.lang.Boolean)
//  .deleteOnDestroy(IResolvable)
//  .description(java.lang.String)
//  .discussionLocked(java.lang.Boolean)
//  .discussionLocked(IResolvable)
//  .discussionToResolve(java.lang.String)
//  .dueDate(java.lang.String)
//  .epicIssueId(java.lang.Number)
//  .id(java.lang.String)
//  .iid(java.lang.Number)
//  .issueType(java.lang.String)
//  .labels(java.util.List<java.lang.String>)
//  .mergeRequestToResolveDiscussionsOf(java.lang.Number)
//  .milestoneId(java.lang.Number)
//  .state(java.lang.String)
//  .updatedAt(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.project">project</a></code> | <code>java.lang.String</code> | The name or ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.title">title</a></code> | <code>java.lang.String</code> | The title of the issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.assigneeIds">assigneeIds</a></code> | <code>java.util.List<java.lang.Number></code> | The IDs of the users to assign the issue to. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.confidential">confidential</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set an issue to be confidential. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | When the issue was created. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.deleteOnDestroy">deleteOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the issue is deleted instead of closed during destroy. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of an issue. Limited to 1,048,576 characters. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.discussionLocked">discussionLocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the issue is locked for discussions or not. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.discussionToResolve">discussionToResolve</a></code> | <code>java.lang.String</code> | The ID of a discussion to resolve. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.dueDate">dueDate</a></code> | <code>java.lang.String</code> | The due date. Date time string in the format YYYY-MM-DD, for example 2016-03-11. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.epicIssueId">epicIssueId</a></code> | <code>java.lang.Number</code> | The ID of the epic issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#id ProjectIssue#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.iid">iid</a></code> | <code>java.lang.Number</code> | The internal ID of the project's issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.issueType">issueType</a></code> | <code>java.lang.String</code> | The type of issue. Valid values are: `issue`, `incident`, `test_case`. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | The labels of an issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.mergeRequestToResolveDiscussionsOf">mergeRequestToResolveDiscussionsOf</a></code> | <code>java.lang.Number</code> | The IID of a merge request in which to resolve all issues. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.milestoneId">milestoneId</a></code> | <code>java.lang.Number</code> | The global ID of a milestone to assign issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.state">state</a></code> | <code>java.lang.String</code> | The state of the issue. Valid values are: `opened`, `closed`. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | When the issue was updated. Date time string, ISO 8601 formatted, for example 2016-03-11T03:45:40Z. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.weight">weight</a></code> | <code>java.lang.Number</code> | The weight of the issue. Valid values are greater than or equal to 0. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The name or ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#project ProjectIssue#project}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

The title of the issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#title ProjectIssue#title}

---

##### `assigneeIds`<sup>Optional</sup> <a name="assigneeIds" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.assigneeIds"></a>

```java
public java.util.List<java.lang.Number> getAssigneeIds();
```

- *Type:* java.util.List<java.lang.Number>

The IDs of the users to assign the issue to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#assignee_ids ProjectIssue#assignee_ids}

---

##### `confidential`<sup>Optional</sup> <a name="confidential" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.confidential"></a>

```java
public java.lang.Object getConfidential();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set an issue to be confidential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#confidential ProjectIssue#confidential}

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

When the issue was created.

Date time string, ISO 8601 formatted, for example 2016-03-11T03:45:40Z. Requires administrator or project/group owner rights.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#created_at ProjectIssue#created_at}

---

##### `deleteOnDestroy`<sup>Optional</sup> <a name="deleteOnDestroy" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.deleteOnDestroy"></a>

```java
public java.lang.Object getDeleteOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the issue is deleted instead of closed during destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#delete_on_destroy ProjectIssue#delete_on_destroy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of an issue. Limited to 1,048,576 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#description ProjectIssue#description}

---

##### `discussionLocked`<sup>Optional</sup> <a name="discussionLocked" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.discussionLocked"></a>

```java
public java.lang.Object getDiscussionLocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the issue is locked for discussions or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#discussion_locked ProjectIssue#discussion_locked}

---

##### `discussionToResolve`<sup>Optional</sup> <a name="discussionToResolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.discussionToResolve"></a>

```java
public java.lang.String getDiscussionToResolve();
```

- *Type:* java.lang.String

The ID of a discussion to resolve.

This fills out the issue with a default description and mark the discussion as resolved. Use in combination with merge_request_to_resolve_discussions_of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#discussion_to_resolve ProjectIssue#discussion_to_resolve}

---

##### `dueDate`<sup>Optional</sup> <a name="dueDate" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.dueDate"></a>

```java
public java.lang.String getDueDate();
```

- *Type:* java.lang.String

The due date. Date time string in the format YYYY-MM-DD, for example 2016-03-11.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#due_date ProjectIssue#due_date}

---

##### `epicIssueId`<sup>Optional</sup> <a name="epicIssueId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.epicIssueId"></a>

```java
public java.lang.Number getEpicIssueId();
```

- *Type:* java.lang.Number

The ID of the epic issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#epic_issue_id ProjectIssue#epic_issue_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#id ProjectIssue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iid`<sup>Optional</sup> <a name="iid" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.iid"></a>

```java
public java.lang.Number getIid();
```

- *Type:* java.lang.Number

The internal ID of the project's issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#iid ProjectIssue#iid}

---

##### `issueType`<sup>Optional</sup> <a name="issueType" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.issueType"></a>

```java
public java.lang.String getIssueType();
```

- *Type:* java.lang.String

The type of issue. Valid values are: `issue`, `incident`, `test_case`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#issue_type ProjectIssue#issue_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

The labels of an issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#labels ProjectIssue#labels}

---

##### `mergeRequestToResolveDiscussionsOf`<sup>Optional</sup> <a name="mergeRequestToResolveDiscussionsOf" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.mergeRequestToResolveDiscussionsOf"></a>

```java
public java.lang.Number getMergeRequestToResolveDiscussionsOf();
```

- *Type:* java.lang.Number

The IID of a merge request in which to resolve all issues.

This fills out the issue with a default description and mark all discussions as resolved. When passing a description or title, these values take precedence over the default values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#merge_request_to_resolve_discussions_of ProjectIssue#merge_request_to_resolve_discussions_of}

---

##### `milestoneId`<sup>Optional</sup> <a name="milestoneId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.milestoneId"></a>

```java
public java.lang.Number getMilestoneId();
```

- *Type:* java.lang.Number

The global ID of a milestone to assign issue.

To find the milestone_id associated with a milestone, view an issue with the milestone assigned and use the API to retrieve the issue's details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#milestone_id ProjectIssue#milestone_id}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

The state of the issue. Valid values are: `opened`, `closed`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#state ProjectIssue#state}

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

When the issue was updated. Date time string, ISO 8601 formatted, for example 2016-03-11T03:45:40Z.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#updated_at ProjectIssue#updated_at}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

The weight of the issue. Valid values are greater than or equal to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_issue#weight ProjectIssue#weight}

---

### ProjectIssueTaskCompletionStatus <a name="ProjectIssueTaskCompletionStatus" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_issue.ProjectIssueTaskCompletionStatus;

ProjectIssueTaskCompletionStatus.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### ProjectIssueTaskCompletionStatusList <a name="ProjectIssueTaskCompletionStatusList" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_issue.ProjectIssueTaskCompletionStatusList;

new ProjectIssueTaskCompletionStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.get"></a>

```java
public ProjectIssueTaskCompletionStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ProjectIssueTaskCompletionStatusOutputReference <a name="ProjectIssueTaskCompletionStatusOutputReference" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_issue.ProjectIssueTaskCompletionStatusOutputReference;

new ProjectIssueTaskCompletionStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.completedCount">completedCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatus">ProjectIssueTaskCompletionStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `completedCount`<sup>Required</sup> <a name="completedCount" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.completedCount"></a>

```java
public java.lang.Number getCompletedCount();
```

- *Type:* java.lang.Number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.internalValue"></a>

```java
public ProjectIssueTaskCompletionStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatus">ProjectIssueTaskCompletionStatus</a>

---



