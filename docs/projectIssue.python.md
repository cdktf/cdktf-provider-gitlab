# `projectIssue` Submodule <a name="`projectIssue` Submodule" id="@cdktf/provider-gitlab.projectIssue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIssue <a name="ProjectIssue" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue gitlab_project_issue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_issue

projectIssue.ProjectIssue(
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
  title: str,
  assignee_ids: typing.List[typing.Union[int, float]] = None,
  confidential: typing.Union[bool, IResolvable] = None,
  created_at: str = None,
  delete_on_destroy: typing.Union[bool, IResolvable] = None,
  description: str = None,
  discussion_locked: typing.Union[bool, IResolvable] = None,
  discussion_to_resolve: str = None,
  due_date: str = None,
  epic_issue_id: typing.Union[int, float] = None,
  id: str = None,
  iid: typing.Union[int, float] = None,
  issue_type: str = None,
  labels: typing.List[str] = None,
  merge_request_to_resolve_discussions_of: typing.Union[int, float] = None,
  milestone_id: typing.Union[int, float] = None,
  state: str = None,
  updated_at: str = None,
  weight: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.project">project</a></code> | <code>str</code> | The name or ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.title">title</a></code> | <code>str</code> | The title of the issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.assigneeIds">assignee_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | The IDs of the users to assign the issue to. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.confidential">confidential</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set an issue to be confidential. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.createdAt">created_at</a></code> | <code>str</code> | When the issue was created. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.deleteOnDestroy">delete_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the issue is deleted instead of closed during destroy. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of an issue. Limited to 1,048,576 characters. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.discussionLocked">discussion_locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the issue is locked for discussions or not. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.discussionToResolve">discussion_to_resolve</a></code> | <code>str</code> | The ID of a discussion to resolve. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.dueDate">due_date</a></code> | <code>str</code> | The due date. Date time string in the format YYYY-MM-DD, for example 2016-03-11. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.epicIssueId">epic_issue_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the epic issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#id ProjectIssue#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.iid">iid</a></code> | <code>typing.Union[int, float]</code> | The internal ID of the project's issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.issueType">issue_type</a></code> | <code>str</code> | The type of issue. Valid values are: `issue`, `incident`, `test_case`. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.labels">labels</a></code> | <code>typing.List[str]</code> | The labels of an issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.mergeRequestToResolveDiscussionsOf">merge_request_to_resolve_discussions_of</a></code> | <code>typing.Union[int, float]</code> | The IID of a merge request in which to resolve all issues. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.milestoneId">milestone_id</a></code> | <code>typing.Union[int, float]</code> | The global ID of a milestone to assign issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.state">state</a></code> | <code>str</code> | The state of the issue. Valid values are: `opened`, `closed`. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.updatedAt">updated_at</a></code> | <code>str</code> | When the issue was updated. Date time string, ISO 8601 formatted, for example 2016-03-11T03:45:40Z. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.weight">weight</a></code> | <code>typing.Union[int, float]</code> | The weight of the issue. Valid values are greater than or equal to 0. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.project"></a>

- *Type:* str

The name or ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#project ProjectIssue#project}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.title"></a>

- *Type:* str

The title of the issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#title ProjectIssue#title}

---

##### `assignee_ids`<sup>Optional</sup> <a name="assignee_ids" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.assigneeIds"></a>

- *Type:* typing.List[typing.Union[int, float]]

The IDs of the users to assign the issue to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#assignee_ids ProjectIssue#assignee_ids}

---

##### `confidential`<sup>Optional</sup> <a name="confidential" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.confidential"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set an issue to be confidential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#confidential ProjectIssue#confidential}

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.createdAt"></a>

- *Type:* str

When the issue was created.

Date time string, ISO 8601 formatted, for example 2016-03-11T03:45:40Z. Requires administrator or project/group owner rights.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#created_at ProjectIssue#created_at}

---

##### `delete_on_destroy`<sup>Optional</sup> <a name="delete_on_destroy" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.deleteOnDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the issue is deleted instead of closed during destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#delete_on_destroy ProjectIssue#delete_on_destroy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.description"></a>

- *Type:* str

The description of an issue. Limited to 1,048,576 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#description ProjectIssue#description}

---

##### `discussion_locked`<sup>Optional</sup> <a name="discussion_locked" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.discussionLocked"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the issue is locked for discussions or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#discussion_locked ProjectIssue#discussion_locked}

---

##### `discussion_to_resolve`<sup>Optional</sup> <a name="discussion_to_resolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.discussionToResolve"></a>

- *Type:* str

The ID of a discussion to resolve.

This fills out the issue with a default description and mark the discussion as resolved. Use in combination with merge_request_to_resolve_discussions_of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#discussion_to_resolve ProjectIssue#discussion_to_resolve}

---

##### `due_date`<sup>Optional</sup> <a name="due_date" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.dueDate"></a>

- *Type:* str

The due date. Date time string in the format YYYY-MM-DD, for example 2016-03-11.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#due_date ProjectIssue#due_date}

---

##### `epic_issue_id`<sup>Optional</sup> <a name="epic_issue_id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.epicIssueId"></a>

- *Type:* typing.Union[int, float]

The ID of the epic issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#epic_issue_id ProjectIssue#epic_issue_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#id ProjectIssue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iid`<sup>Optional</sup> <a name="iid" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.iid"></a>

- *Type:* typing.Union[int, float]

The internal ID of the project's issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#iid ProjectIssue#iid}

---

##### `issue_type`<sup>Optional</sup> <a name="issue_type" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.issueType"></a>

- *Type:* str

The type of issue. Valid values are: `issue`, `incident`, `test_case`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#issue_type ProjectIssue#issue_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.labels"></a>

- *Type:* typing.List[str]

The labels of an issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#labels ProjectIssue#labels}

---

##### `merge_request_to_resolve_discussions_of`<sup>Optional</sup> <a name="merge_request_to_resolve_discussions_of" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.mergeRequestToResolveDiscussionsOf"></a>

- *Type:* typing.Union[int, float]

The IID of a merge request in which to resolve all issues.

This fills out the issue with a default description and mark all discussions as resolved. When passing a description or title, these values take precedence over the default values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#merge_request_to_resolve_discussions_of ProjectIssue#merge_request_to_resolve_discussions_of}

---

##### `milestone_id`<sup>Optional</sup> <a name="milestone_id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.milestoneId"></a>

- *Type:* typing.Union[int, float]

The global ID of a milestone to assign issue.

To find the milestone_id associated with a milestone, view an issue with the milestone assigned and use the API to retrieve the issue's details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#milestone_id ProjectIssue#milestone_id}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.state"></a>

- *Type:* str

The state of the issue. Valid values are: `opened`, `closed`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#state ProjectIssue#state}

---

##### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.updatedAt"></a>

- *Type:* str

When the issue was updated. Date time string, ISO 8601 formatted, for example 2016-03-11T03:45:40Z.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#updated_at ProjectIssue#updated_at}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.weight"></a>

- *Type:* typing.Union[int, float]

The weight of the issue. Valid values are greater than or equal to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#weight ProjectIssue#weight}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetAssigneeIds">reset_assignee_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetConfidential">reset_confidential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetCreatedAt">reset_created_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDeleteOnDestroy">reset_delete_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDiscussionLocked">reset_discussion_locked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDiscussionToResolve">reset_discussion_to_resolve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDueDate">reset_due_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetEpicIssueId">reset_epic_issue_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetIid">reset_iid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetIssueType">reset_issue_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetMergeRequestToResolveDiscussionsOf">reset_merge_request_to_resolve_discussions_of</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetMilestoneId">reset_milestone_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetUpdatedAt">reset_updated_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_assignee_ids` <a name="reset_assignee_ids" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetAssigneeIds"></a>

```python
def reset_assignee_ids() -> None
```

##### `reset_confidential` <a name="reset_confidential" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetConfidential"></a>

```python
def reset_confidential() -> None
```

##### `reset_created_at` <a name="reset_created_at" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetCreatedAt"></a>

```python
def reset_created_at() -> None
```

##### `reset_delete_on_destroy` <a name="reset_delete_on_destroy" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDeleteOnDestroy"></a>

```python
def reset_delete_on_destroy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_discussion_locked` <a name="reset_discussion_locked" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDiscussionLocked"></a>

```python
def reset_discussion_locked() -> None
```

##### `reset_discussion_to_resolve` <a name="reset_discussion_to_resolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDiscussionToResolve"></a>

```python
def reset_discussion_to_resolve() -> None
```

##### `reset_due_date` <a name="reset_due_date" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDueDate"></a>

```python
def reset_due_date() -> None
```

##### `reset_epic_issue_id` <a name="reset_epic_issue_id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetEpicIssueId"></a>

```python
def reset_epic_issue_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_iid` <a name="reset_iid" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetIid"></a>

```python
def reset_iid() -> None
```

##### `reset_issue_type` <a name="reset_issue_type" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetIssueType"></a>

```python
def reset_issue_type() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_merge_request_to_resolve_discussions_of` <a name="reset_merge_request_to_resolve_discussions_of" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetMergeRequestToResolveDiscussionsOf"></a>

```python
def reset_merge_request_to_resolve_discussions_of() -> None
```

##### `reset_milestone_id` <a name="reset_milestone_id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetMilestoneId"></a>

```python
def reset_milestone_id() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_updated_at` <a name="reset_updated_at" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetUpdatedAt"></a>

```python
def reset_updated_at() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetWeight"></a>

```python
def reset_weight() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ProjectIssue resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import project_issue

projectIssue.ProjectIssue.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import project_issue

projectIssue.ProjectIssue.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import project_issue

projectIssue.ProjectIssue.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import project_issue

projectIssue.ProjectIssue.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ProjectIssue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProjectIssue to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProjectIssue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIssue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.authorId">author_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.closedAt">closed_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.closedByUserId">closed_by_user_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.downvotes">downvotes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicId">epic_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.humanTimeEstimate">human_time_estimate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.humanTotalTimeSpent">human_total_time_spent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueId">issue_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueLinkId">issue_link_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.links">links</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestsCount">merge_requests_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.movedToId">moved_to_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.references">references</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.subscribed">subscribed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.taskCompletionStatus">task_completion_status</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList">ProjectIssueTaskCompletionStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.timeEstimate">time_estimate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.totalTimeSpent">total_time_spent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.upvotes">upvotes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.userNotesCount">user_notes_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.webUrl">web_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.assigneeIdsInput">assignee_ids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.confidentialInput">confidential_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.createdAtInput">created_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.deleteOnDestroyInput">delete_on_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionLockedInput">discussion_locked_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionToResolveInput">discussion_to_resolve_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dueDateInput">due_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicIssueIdInput">epic_issue_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.iidInput">iid_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueTypeInput">issue_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.labelsInput">labels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestToResolveDiscussionsOfInput">merge_request_to_resolve_discussions_of_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.milestoneIdInput">milestone_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.updatedAtInput">updated_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.assigneeIds">assignee_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.confidential">confidential</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.deleteOnDestroy">delete_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionLocked">discussion_locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionToResolve">discussion_to_resolve</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dueDate">due_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicIssueId">epic_issue_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.iid">iid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueType">issue_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestToResolveDiscussionsOf">merge_request_to_resolve_discussions_of</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.milestoneId">milestone_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `author_id`<sup>Required</sup> <a name="author_id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.authorId"></a>

```python
author_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `closed_at`<sup>Required</sup> <a name="closed_at" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.closedAt"></a>

```python
closed_at: str
```

- *Type:* str

---

##### `closed_by_user_id`<sup>Required</sup> <a name="closed_by_user_id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.closedByUserId"></a>

```python
closed_by_user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `downvotes`<sup>Required</sup> <a name="downvotes" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.downvotes"></a>

```python
downvotes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `epic_id`<sup>Required</sup> <a name="epic_id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicId"></a>

```python
epic_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `human_time_estimate`<sup>Required</sup> <a name="human_time_estimate" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.humanTimeEstimate"></a>

```python
human_time_estimate: str
```

- *Type:* str

---

##### `human_total_time_spent`<sup>Required</sup> <a name="human_total_time_spent" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.humanTotalTimeSpent"></a>

```python
human_total_time_spent: str
```

- *Type:* str

---

##### `issue_id`<sup>Required</sup> <a name="issue_id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueId"></a>

```python
issue_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issue_link_id`<sup>Required</sup> <a name="issue_link_id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueLinkId"></a>

```python
issue_link_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.links"></a>

```python
links: StringMap
```

- *Type:* cdktf.StringMap

---

##### `merge_requests_count`<sup>Required</sup> <a name="merge_requests_count" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestsCount"></a>

```python
merge_requests_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `moved_to_id`<sup>Required</sup> <a name="moved_to_id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.movedToId"></a>

```python
moved_to_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `references`<sup>Required</sup> <a name="references" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.references"></a>

```python
references: StringMap
```

- *Type:* cdktf.StringMap

---

##### `subscribed`<sup>Required</sup> <a name="subscribed" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.subscribed"></a>

```python
subscribed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `task_completion_status`<sup>Required</sup> <a name="task_completion_status" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.taskCompletionStatus"></a>

```python
task_completion_status: ProjectIssueTaskCompletionStatusList
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList">ProjectIssueTaskCompletionStatusList</a>

---

##### `time_estimate`<sup>Required</sup> <a name="time_estimate" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.timeEstimate"></a>

```python
time_estimate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_time_spent`<sup>Required</sup> <a name="total_time_spent" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.totalTimeSpent"></a>

```python
total_time_spent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `upvotes`<sup>Required</sup> <a name="upvotes" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.upvotes"></a>

```python
upvotes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_notes_count`<sup>Required</sup> <a name="user_notes_count" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.userNotesCount"></a>

```python
user_notes_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `web_url`<sup>Required</sup> <a name="web_url" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.webUrl"></a>

```python
web_url: str
```

- *Type:* str

---

##### `assignee_ids_input`<sup>Optional</sup> <a name="assignee_ids_input" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.assigneeIdsInput"></a>

```python
assignee_ids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `confidential_input`<sup>Optional</sup> <a name="confidential_input" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.confidentialInput"></a>

```python
confidential_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `created_at_input`<sup>Optional</sup> <a name="created_at_input" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.createdAtInput"></a>

```python
created_at_input: str
```

- *Type:* str

---

##### `delete_on_destroy_input`<sup>Optional</sup> <a name="delete_on_destroy_input" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.deleteOnDestroyInput"></a>

```python
delete_on_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `discussion_locked_input`<sup>Optional</sup> <a name="discussion_locked_input" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionLockedInput"></a>

```python
discussion_locked_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `discussion_to_resolve_input`<sup>Optional</sup> <a name="discussion_to_resolve_input" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionToResolveInput"></a>

```python
discussion_to_resolve_input: str
```

- *Type:* str

---

##### `due_date_input`<sup>Optional</sup> <a name="due_date_input" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dueDateInput"></a>

```python
due_date_input: str
```

- *Type:* str

---

##### `epic_issue_id_input`<sup>Optional</sup> <a name="epic_issue_id_input" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicIssueIdInput"></a>

```python
epic_issue_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `iid_input`<sup>Optional</sup> <a name="iid_input" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.iidInput"></a>

```python
iid_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issue_type_input`<sup>Optional</sup> <a name="issue_type_input" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueTypeInput"></a>

```python
issue_type_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.labelsInput"></a>

```python
labels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `merge_request_to_resolve_discussions_of_input`<sup>Optional</sup> <a name="merge_request_to_resolve_discussions_of_input" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestToResolveDiscussionsOfInput"></a>

```python
merge_request_to_resolve_discussions_of_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `milestone_id_input`<sup>Optional</sup> <a name="milestone_id_input" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.milestoneIdInput"></a>

```python
milestone_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `updated_at_input`<sup>Optional</sup> <a name="updated_at_input" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.updatedAtInput"></a>

```python
updated_at_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `assignee_ids`<sup>Required</sup> <a name="assignee_ids" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.assigneeIds"></a>

```python
assignee_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `confidential`<sup>Required</sup> <a name="confidential" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.confidential"></a>

```python
confidential: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `delete_on_destroy`<sup>Required</sup> <a name="delete_on_destroy" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.deleteOnDestroy"></a>

```python
delete_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `discussion_locked`<sup>Required</sup> <a name="discussion_locked" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionLocked"></a>

```python
discussion_locked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `discussion_to_resolve`<sup>Required</sup> <a name="discussion_to_resolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionToResolve"></a>

```python
discussion_to_resolve: str
```

- *Type:* str

---

##### `due_date`<sup>Required</sup> <a name="due_date" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dueDate"></a>

```python
due_date: str
```

- *Type:* str

---

##### `epic_issue_id`<sup>Required</sup> <a name="epic_issue_id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicIssueId"></a>

```python
epic_issue_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `iid`<sup>Required</sup> <a name="iid" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.iid"></a>

```python
iid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issue_type`<sup>Required</sup> <a name="issue_type" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueType"></a>

```python
issue_type: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `merge_request_to_resolve_discussions_of`<sup>Required</sup> <a name="merge_request_to_resolve_discussions_of" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestToResolveDiscussionsOf"></a>

```python
merge_request_to_resolve_discussions_of: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `milestone_id`<sup>Required</sup> <a name="milestone_id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.milestoneId"></a>

```python
milestone_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIssueConfig <a name="ProjectIssueConfig" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_issue

projectIssue.ProjectIssueConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project: str,
  title: str,
  assignee_ids: typing.List[typing.Union[int, float]] = None,
  confidential: typing.Union[bool, IResolvable] = None,
  created_at: str = None,
  delete_on_destroy: typing.Union[bool, IResolvable] = None,
  description: str = None,
  discussion_locked: typing.Union[bool, IResolvable] = None,
  discussion_to_resolve: str = None,
  due_date: str = None,
  epic_issue_id: typing.Union[int, float] = None,
  id: str = None,
  iid: typing.Union[int, float] = None,
  issue_type: str = None,
  labels: typing.List[str] = None,
  merge_request_to_resolve_discussions_of: typing.Union[int, float] = None,
  milestone_id: typing.Union[int, float] = None,
  state: str = None,
  updated_at: str = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.project">project</a></code> | <code>str</code> | The name or ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.title">title</a></code> | <code>str</code> | The title of the issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.assigneeIds">assignee_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | The IDs of the users to assign the issue to. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.confidential">confidential</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set an issue to be confidential. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.createdAt">created_at</a></code> | <code>str</code> | When the issue was created. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.deleteOnDestroy">delete_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the issue is deleted instead of closed during destroy. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.description">description</a></code> | <code>str</code> | The description of an issue. Limited to 1,048,576 characters. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.discussionLocked">discussion_locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the issue is locked for discussions or not. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.discussionToResolve">discussion_to_resolve</a></code> | <code>str</code> | The ID of a discussion to resolve. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.dueDate">due_date</a></code> | <code>str</code> | The due date. Date time string in the format YYYY-MM-DD, for example 2016-03-11. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.epicIssueId">epic_issue_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the epic issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#id ProjectIssue#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.iid">iid</a></code> | <code>typing.Union[int, float]</code> | The internal ID of the project's issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.issueType">issue_type</a></code> | <code>str</code> | The type of issue. Valid values are: `issue`, `incident`, `test_case`. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.labels">labels</a></code> | <code>typing.List[str]</code> | The labels of an issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.mergeRequestToResolveDiscussionsOf">merge_request_to_resolve_discussions_of</a></code> | <code>typing.Union[int, float]</code> | The IID of a merge request in which to resolve all issues. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.milestoneId">milestone_id</a></code> | <code>typing.Union[int, float]</code> | The global ID of a milestone to assign issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.state">state</a></code> | <code>str</code> | The state of the issue. Valid values are: `opened`, `closed`. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.updatedAt">updated_at</a></code> | <code>str</code> | When the issue was updated. Date time string, ISO 8601 formatted, for example 2016-03-11T03:45:40Z. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | The weight of the issue. Valid values are greater than or equal to 0. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The name or ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#project ProjectIssue#project}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.title"></a>

```python
title: str
```

- *Type:* str

The title of the issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#title ProjectIssue#title}

---

##### `assignee_ids`<sup>Optional</sup> <a name="assignee_ids" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.assigneeIds"></a>

```python
assignee_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

The IDs of the users to assign the issue to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#assignee_ids ProjectIssue#assignee_ids}

---

##### `confidential`<sup>Optional</sup> <a name="confidential" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.confidential"></a>

```python
confidential: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set an issue to be confidential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#confidential ProjectIssue#confidential}

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

When the issue was created.

Date time string, ISO 8601 formatted, for example 2016-03-11T03:45:40Z. Requires administrator or project/group owner rights.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#created_at ProjectIssue#created_at}

---

##### `delete_on_destroy`<sup>Optional</sup> <a name="delete_on_destroy" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.deleteOnDestroy"></a>

```python
delete_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the issue is deleted instead of closed during destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#delete_on_destroy ProjectIssue#delete_on_destroy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of an issue. Limited to 1,048,576 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#description ProjectIssue#description}

---

##### `discussion_locked`<sup>Optional</sup> <a name="discussion_locked" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.discussionLocked"></a>

```python
discussion_locked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the issue is locked for discussions or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#discussion_locked ProjectIssue#discussion_locked}

---

##### `discussion_to_resolve`<sup>Optional</sup> <a name="discussion_to_resolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.discussionToResolve"></a>

```python
discussion_to_resolve: str
```

- *Type:* str

The ID of a discussion to resolve.

This fills out the issue with a default description and mark the discussion as resolved. Use in combination with merge_request_to_resolve_discussions_of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#discussion_to_resolve ProjectIssue#discussion_to_resolve}

---

##### `due_date`<sup>Optional</sup> <a name="due_date" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.dueDate"></a>

```python
due_date: str
```

- *Type:* str

The due date. Date time string in the format YYYY-MM-DD, for example 2016-03-11.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#due_date ProjectIssue#due_date}

---

##### `epic_issue_id`<sup>Optional</sup> <a name="epic_issue_id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.epicIssueId"></a>

```python
epic_issue_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the epic issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#epic_issue_id ProjectIssue#epic_issue_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#id ProjectIssue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iid`<sup>Optional</sup> <a name="iid" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.iid"></a>

```python
iid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The internal ID of the project's issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#iid ProjectIssue#iid}

---

##### `issue_type`<sup>Optional</sup> <a name="issue_type" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.issueType"></a>

```python
issue_type: str
```

- *Type:* str

The type of issue. Valid values are: `issue`, `incident`, `test_case`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#issue_type ProjectIssue#issue_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

The labels of an issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#labels ProjectIssue#labels}

---

##### `merge_request_to_resolve_discussions_of`<sup>Optional</sup> <a name="merge_request_to_resolve_discussions_of" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.mergeRequestToResolveDiscussionsOf"></a>

```python
merge_request_to_resolve_discussions_of: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The IID of a merge request in which to resolve all issues.

This fills out the issue with a default description and mark all discussions as resolved. When passing a description or title, these values take precedence over the default values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#merge_request_to_resolve_discussions_of ProjectIssue#merge_request_to_resolve_discussions_of}

---

##### `milestone_id`<sup>Optional</sup> <a name="milestone_id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.milestoneId"></a>

```python
milestone_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The global ID of a milestone to assign issue.

To find the milestone_id associated with a milestone, view an issue with the milestone assigned and use the API to retrieve the issue's details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#milestone_id ProjectIssue#milestone_id}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.state"></a>

```python
state: str
```

- *Type:* str

The state of the issue. Valid values are: `opened`, `closed`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#state ProjectIssue#state}

---

##### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

When the issue was updated. Date time string, ISO 8601 formatted, for example 2016-03-11T03:45:40Z.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#updated_at ProjectIssue#updated_at}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The weight of the issue. Valid values are greater than or equal to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs/resources/project_issue#weight ProjectIssue#weight}

---

### ProjectIssueTaskCompletionStatus <a name="ProjectIssueTaskCompletionStatus" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_issue

projectIssue.ProjectIssueTaskCompletionStatus()
```


## Classes <a name="Classes" id="Classes"></a>

### ProjectIssueTaskCompletionStatusList <a name="ProjectIssueTaskCompletionStatusList" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_issue

projectIssue.ProjectIssueTaskCompletionStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProjectIssueTaskCompletionStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ProjectIssueTaskCompletionStatusOutputReference <a name="ProjectIssueTaskCompletionStatusOutputReference" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_issue

projectIssue.ProjectIssueTaskCompletionStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.completedCount">completed_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatus">ProjectIssueTaskCompletionStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `completed_count`<sup>Required</sup> <a name="completed_count" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.completedCount"></a>

```python
completed_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.internalValue"></a>

```python
internal_value: ProjectIssueTaskCompletionStatus
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatus">ProjectIssueTaskCompletionStatus</a>

---



