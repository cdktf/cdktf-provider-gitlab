# `projectLevelNotifications` Submodule <a name="`projectLevelNotifications` Submodule" id="@cdktf/provider-gitlab.projectLevelNotifications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectLevelNotifications <a name="ProjectLevelNotifications" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications gitlab_project_level_notifications}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_level_notifications

projectLevelNotifications.ProjectLevelNotifications(
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
  close_issue: typing.Union[bool, IResolvable] = None,
  close_merge_request: typing.Union[bool, IResolvable] = None,
  failed_pipeline: typing.Union[bool, IResolvable] = None,
  fixed_pipeline: typing.Union[bool, IResolvable] = None,
  issue_due: typing.Union[bool, IResolvable] = None,
  level: str = None,
  merge_merge_request: typing.Union[bool, IResolvable] = None,
  merge_when_pipeline_succeeds: typing.Union[bool, IResolvable] = None,
  moved_project: typing.Union[bool, IResolvable] = None,
  new_issue: typing.Union[bool, IResolvable] = None,
  new_merge_request: typing.Union[bool, IResolvable] = None,
  new_note: typing.Union[bool, IResolvable] = None,
  push_to_merge_request: typing.Union[bool, IResolvable] = None,
  reassign_issue: typing.Union[bool, IResolvable] = None,
  reassign_merge_request: typing.Union[bool, IResolvable] = None,
  reopen_issue: typing.Union[bool, IResolvable] = None,
  reopen_merge_request: typing.Union[bool, IResolvable] = None,
  success_pipeline: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID or URL-encoded path of a project where notifications will be configured. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.closeIssue">close_issue</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for closed issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.closeMergeRequest">close_merge_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for closed merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.failedPipeline">failed_pipeline</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for failed pipelines. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.fixedPipeline">fixed_pipeline</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for fixed pipelines. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.issueDue">issue_due</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for due issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.level">level</a></code> | <code>str</code> | The level of the notification. Valid values are: `disabled`, `participating`, `watch`, `global`, `mention`, `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.mergeMergeRequest">merge_merge_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for merged merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.mergeWhenPipelineSucceeds">merge_when_pipeline_succeeds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for merged merge requests when the pipeline succeeds. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.movedProject">moved_project</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for moved projects. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.newIssue">new_issue</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for new issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.newMergeRequest">new_merge_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for new merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.newNote">new_note</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for new notes on merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.pushToMergeRequest">push_to_merge_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for push to merge request branches. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.reassignIssue">reassign_issue</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for issue reassignments. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.reassignMergeRequest">reassign_merge_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for merge request reassignments. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.reopenIssue">reopen_issue</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for reopened issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.reopenMergeRequest">reopen_merge_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for reopened merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.successPipeline">success_pipeline</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for successful pipelines. Can only be used when `level` is `custom`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.project"></a>

- *Type:* str

The ID or URL-encoded path of a project where notifications will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#project ProjectLevelNotifications#project}

---

##### `close_issue`<sup>Optional</sup> <a name="close_issue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.closeIssue"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for closed issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#close_issue ProjectLevelNotifications#close_issue}

---

##### `close_merge_request`<sup>Optional</sup> <a name="close_merge_request" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.closeMergeRequest"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for closed merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#close_merge_request ProjectLevelNotifications#close_merge_request}

---

##### `failed_pipeline`<sup>Optional</sup> <a name="failed_pipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.failedPipeline"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for failed pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#failed_pipeline ProjectLevelNotifications#failed_pipeline}

---

##### `fixed_pipeline`<sup>Optional</sup> <a name="fixed_pipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.fixedPipeline"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for fixed pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#fixed_pipeline ProjectLevelNotifications#fixed_pipeline}

---

##### `issue_due`<sup>Optional</sup> <a name="issue_due" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.issueDue"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for due issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#issue_due ProjectLevelNotifications#issue_due}

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.level"></a>

- *Type:* str

The level of the notification. Valid values are: `disabled`, `participating`, `watch`, `global`, `mention`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#level ProjectLevelNotifications#level}

---

##### `merge_merge_request`<sup>Optional</sup> <a name="merge_merge_request" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.mergeMergeRequest"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for merged merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#merge_merge_request ProjectLevelNotifications#merge_merge_request}

---

##### `merge_when_pipeline_succeeds`<sup>Optional</sup> <a name="merge_when_pipeline_succeeds" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.mergeWhenPipelineSucceeds"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for merged merge requests when the pipeline succeeds. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#merge_when_pipeline_succeeds ProjectLevelNotifications#merge_when_pipeline_succeeds}

---

##### `moved_project`<sup>Optional</sup> <a name="moved_project" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.movedProject"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for moved projects. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#moved_project ProjectLevelNotifications#moved_project}

---

##### `new_issue`<sup>Optional</sup> <a name="new_issue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.newIssue"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for new issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#new_issue ProjectLevelNotifications#new_issue}

---

##### `new_merge_request`<sup>Optional</sup> <a name="new_merge_request" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.newMergeRequest"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for new merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#new_merge_request ProjectLevelNotifications#new_merge_request}

---

##### `new_note`<sup>Optional</sup> <a name="new_note" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.newNote"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for new notes on merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#new_note ProjectLevelNotifications#new_note}

---

##### `push_to_merge_request`<sup>Optional</sup> <a name="push_to_merge_request" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.pushToMergeRequest"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for push to merge request branches. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#push_to_merge_request ProjectLevelNotifications#push_to_merge_request}

---

##### `reassign_issue`<sup>Optional</sup> <a name="reassign_issue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.reassignIssue"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for issue reassignments. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#reassign_issue ProjectLevelNotifications#reassign_issue}

---

##### `reassign_merge_request`<sup>Optional</sup> <a name="reassign_merge_request" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.reassignMergeRequest"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for merge request reassignments. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#reassign_merge_request ProjectLevelNotifications#reassign_merge_request}

---

##### `reopen_issue`<sup>Optional</sup> <a name="reopen_issue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.reopenIssue"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for reopened issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#reopen_issue ProjectLevelNotifications#reopen_issue}

---

##### `reopen_merge_request`<sup>Optional</sup> <a name="reopen_merge_request" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.reopenMergeRequest"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for reopened merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#reopen_merge_request ProjectLevelNotifications#reopen_merge_request}

---

##### `success_pipeline`<sup>Optional</sup> <a name="success_pipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.successPipeline"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for successful pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#success_pipeline ProjectLevelNotifications#success_pipeline}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetCloseIssue">reset_close_issue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetCloseMergeRequest">reset_close_merge_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetFailedPipeline">reset_failed_pipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetFixedPipeline">reset_fixed_pipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetIssueDue">reset_issue_due</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetLevel">reset_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetMergeMergeRequest">reset_merge_merge_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetMergeWhenPipelineSucceeds">reset_merge_when_pipeline_succeeds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetMovedProject">reset_moved_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetNewIssue">reset_new_issue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetNewMergeRequest">reset_new_merge_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetNewNote">reset_new_note</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetPushToMergeRequest">reset_push_to_merge_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReassignIssue">reset_reassign_issue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReassignMergeRequest">reset_reassign_merge_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReopenIssue">reset_reopen_issue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReopenMergeRequest">reset_reopen_merge_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetSuccessPipeline">reset_success_pipeline</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_close_issue` <a name="reset_close_issue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetCloseIssue"></a>

```python
def reset_close_issue() -> None
```

##### `reset_close_merge_request` <a name="reset_close_merge_request" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetCloseMergeRequest"></a>

```python
def reset_close_merge_request() -> None
```

##### `reset_failed_pipeline` <a name="reset_failed_pipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetFailedPipeline"></a>

```python
def reset_failed_pipeline() -> None
```

##### `reset_fixed_pipeline` <a name="reset_fixed_pipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetFixedPipeline"></a>

```python
def reset_fixed_pipeline() -> None
```

##### `reset_issue_due` <a name="reset_issue_due" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetIssueDue"></a>

```python
def reset_issue_due() -> None
```

##### `reset_level` <a name="reset_level" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetLevel"></a>

```python
def reset_level() -> None
```

##### `reset_merge_merge_request` <a name="reset_merge_merge_request" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetMergeMergeRequest"></a>

```python
def reset_merge_merge_request() -> None
```

##### `reset_merge_when_pipeline_succeeds` <a name="reset_merge_when_pipeline_succeeds" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetMergeWhenPipelineSucceeds"></a>

```python
def reset_merge_when_pipeline_succeeds() -> None
```

##### `reset_moved_project` <a name="reset_moved_project" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetMovedProject"></a>

```python
def reset_moved_project() -> None
```

##### `reset_new_issue` <a name="reset_new_issue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetNewIssue"></a>

```python
def reset_new_issue() -> None
```

##### `reset_new_merge_request` <a name="reset_new_merge_request" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetNewMergeRequest"></a>

```python
def reset_new_merge_request() -> None
```

##### `reset_new_note` <a name="reset_new_note" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetNewNote"></a>

```python
def reset_new_note() -> None
```

##### `reset_push_to_merge_request` <a name="reset_push_to_merge_request" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetPushToMergeRequest"></a>

```python
def reset_push_to_merge_request() -> None
```

##### `reset_reassign_issue` <a name="reset_reassign_issue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReassignIssue"></a>

```python
def reset_reassign_issue() -> None
```

##### `reset_reassign_merge_request` <a name="reset_reassign_merge_request" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReassignMergeRequest"></a>

```python
def reset_reassign_merge_request() -> None
```

##### `reset_reopen_issue` <a name="reset_reopen_issue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReopenIssue"></a>

```python
def reset_reopen_issue() -> None
```

##### `reset_reopen_merge_request` <a name="reset_reopen_merge_request" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReopenMergeRequest"></a>

```python
def reset_reopen_merge_request() -> None
```

##### `reset_success_pipeline` <a name="reset_success_pipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetSuccessPipeline"></a>

```python
def reset_success_pipeline() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ProjectLevelNotifications resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import project_level_notifications

projectLevelNotifications.ProjectLevelNotifications.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import project_level_notifications

projectLevelNotifications.ProjectLevelNotifications.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import project_level_notifications

projectLevelNotifications.ProjectLevelNotifications.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import project_level_notifications

projectLevelNotifications.ProjectLevelNotifications.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ProjectLevelNotifications resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProjectLevelNotifications to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProjectLevelNotifications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectLevelNotifications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeIssueInput">close_issue_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeMergeRequestInput">close_merge_request_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.failedPipelineInput">failed_pipeline_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.fixedPipelineInput">fixed_pipeline_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.issueDueInput">issue_due_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.levelInput">level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeMergeRequestInput">merge_merge_request_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeWhenPipelineSucceedsInput">merge_when_pipeline_succeeds_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.movedProjectInput">moved_project_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newIssueInput">new_issue_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newMergeRequestInput">new_merge_request_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newNoteInput">new_note_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.pushToMergeRequestInput">push_to_merge_request_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignIssueInput">reassign_issue_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignMergeRequestInput">reassign_merge_request_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenIssueInput">reopen_issue_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenMergeRequestInput">reopen_merge_request_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.successPipelineInput">success_pipeline_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeIssue">close_issue</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeMergeRequest">close_merge_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.failedPipeline">failed_pipeline</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.fixedPipeline">fixed_pipeline</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.issueDue">issue_due</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeMergeRequest">merge_merge_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeWhenPipelineSucceeds">merge_when_pipeline_succeeds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.movedProject">moved_project</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newIssue">new_issue</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newMergeRequest">new_merge_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newNote">new_note</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.pushToMergeRequest">push_to_merge_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignIssue">reassign_issue</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignMergeRequest">reassign_merge_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenIssue">reopen_issue</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenMergeRequest">reopen_merge_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.successPipeline">success_pipeline</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `close_issue_input`<sup>Optional</sup> <a name="close_issue_input" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeIssueInput"></a>

```python
close_issue_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `close_merge_request_input`<sup>Optional</sup> <a name="close_merge_request_input" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeMergeRequestInput"></a>

```python
close_merge_request_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `failed_pipeline_input`<sup>Optional</sup> <a name="failed_pipeline_input" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.failedPipelineInput"></a>

```python
failed_pipeline_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fixed_pipeline_input`<sup>Optional</sup> <a name="fixed_pipeline_input" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.fixedPipelineInput"></a>

```python
fixed_pipeline_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `issue_due_input`<sup>Optional</sup> <a name="issue_due_input" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.issueDueInput"></a>

```python
issue_due_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `level_input`<sup>Optional</sup> <a name="level_input" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.levelInput"></a>

```python
level_input: str
```

- *Type:* str

---

##### `merge_merge_request_input`<sup>Optional</sup> <a name="merge_merge_request_input" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeMergeRequestInput"></a>

```python
merge_merge_request_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `merge_when_pipeline_succeeds_input`<sup>Optional</sup> <a name="merge_when_pipeline_succeeds_input" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeWhenPipelineSucceedsInput"></a>

```python
merge_when_pipeline_succeeds_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `moved_project_input`<sup>Optional</sup> <a name="moved_project_input" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.movedProjectInput"></a>

```python
moved_project_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `new_issue_input`<sup>Optional</sup> <a name="new_issue_input" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newIssueInput"></a>

```python
new_issue_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `new_merge_request_input`<sup>Optional</sup> <a name="new_merge_request_input" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newMergeRequestInput"></a>

```python
new_merge_request_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `new_note_input`<sup>Optional</sup> <a name="new_note_input" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newNoteInput"></a>

```python
new_note_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `push_to_merge_request_input`<sup>Optional</sup> <a name="push_to_merge_request_input" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.pushToMergeRequestInput"></a>

```python
push_to_merge_request_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reassign_issue_input`<sup>Optional</sup> <a name="reassign_issue_input" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignIssueInput"></a>

```python
reassign_issue_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reassign_merge_request_input`<sup>Optional</sup> <a name="reassign_merge_request_input" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignMergeRequestInput"></a>

```python
reassign_merge_request_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reopen_issue_input`<sup>Optional</sup> <a name="reopen_issue_input" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenIssueInput"></a>

```python
reopen_issue_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reopen_merge_request_input`<sup>Optional</sup> <a name="reopen_merge_request_input" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenMergeRequestInput"></a>

```python
reopen_merge_request_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `success_pipeline_input`<sup>Optional</sup> <a name="success_pipeline_input" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.successPipelineInput"></a>

```python
success_pipeline_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `close_issue`<sup>Required</sup> <a name="close_issue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeIssue"></a>

```python
close_issue: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `close_merge_request`<sup>Required</sup> <a name="close_merge_request" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeMergeRequest"></a>

```python
close_merge_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `failed_pipeline`<sup>Required</sup> <a name="failed_pipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.failedPipeline"></a>

```python
failed_pipeline: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fixed_pipeline`<sup>Required</sup> <a name="fixed_pipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.fixedPipeline"></a>

```python
fixed_pipeline: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `issue_due`<sup>Required</sup> <a name="issue_due" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.issueDue"></a>

```python
issue_due: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `merge_merge_request`<sup>Required</sup> <a name="merge_merge_request" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeMergeRequest"></a>

```python
merge_merge_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `merge_when_pipeline_succeeds`<sup>Required</sup> <a name="merge_when_pipeline_succeeds" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeWhenPipelineSucceeds"></a>

```python
merge_when_pipeline_succeeds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `moved_project`<sup>Required</sup> <a name="moved_project" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.movedProject"></a>

```python
moved_project: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `new_issue`<sup>Required</sup> <a name="new_issue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newIssue"></a>

```python
new_issue: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `new_merge_request`<sup>Required</sup> <a name="new_merge_request" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newMergeRequest"></a>

```python
new_merge_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `new_note`<sup>Required</sup> <a name="new_note" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newNote"></a>

```python
new_note: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `push_to_merge_request`<sup>Required</sup> <a name="push_to_merge_request" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.pushToMergeRequest"></a>

```python
push_to_merge_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reassign_issue`<sup>Required</sup> <a name="reassign_issue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignIssue"></a>

```python
reassign_issue: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reassign_merge_request`<sup>Required</sup> <a name="reassign_merge_request" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignMergeRequest"></a>

```python
reassign_merge_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reopen_issue`<sup>Required</sup> <a name="reopen_issue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenIssue"></a>

```python
reopen_issue: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reopen_merge_request`<sup>Required</sup> <a name="reopen_merge_request" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenMergeRequest"></a>

```python
reopen_merge_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `success_pipeline`<sup>Required</sup> <a name="success_pipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.successPipeline"></a>

```python
success_pipeline: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectLevelNotificationsConfig <a name="ProjectLevelNotificationsConfig" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_level_notifications

projectLevelNotifications.ProjectLevelNotificationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project: str,
  close_issue: typing.Union[bool, IResolvable] = None,
  close_merge_request: typing.Union[bool, IResolvable] = None,
  failed_pipeline: typing.Union[bool, IResolvable] = None,
  fixed_pipeline: typing.Union[bool, IResolvable] = None,
  issue_due: typing.Union[bool, IResolvable] = None,
  level: str = None,
  merge_merge_request: typing.Union[bool, IResolvable] = None,
  merge_when_pipeline_succeeds: typing.Union[bool, IResolvable] = None,
  moved_project: typing.Union[bool, IResolvable] = None,
  new_issue: typing.Union[bool, IResolvable] = None,
  new_merge_request: typing.Union[bool, IResolvable] = None,
  new_note: typing.Union[bool, IResolvable] = None,
  push_to_merge_request: typing.Union[bool, IResolvable] = None,
  reassign_issue: typing.Union[bool, IResolvable] = None,
  reassign_merge_request: typing.Union[bool, IResolvable] = None,
  reopen_issue: typing.Union[bool, IResolvable] = None,
  reopen_merge_request: typing.Union[bool, IResolvable] = None,
  success_pipeline: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.project">project</a></code> | <code>str</code> | The ID or URL-encoded path of a project where notifications will be configured. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.closeIssue">close_issue</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for closed issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.closeMergeRequest">close_merge_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for closed merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.failedPipeline">failed_pipeline</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for failed pipelines. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.fixedPipeline">fixed_pipeline</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for fixed pipelines. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.issueDue">issue_due</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for due issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.level">level</a></code> | <code>str</code> | The level of the notification. Valid values are: `disabled`, `participating`, `watch`, `global`, `mention`, `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.mergeMergeRequest">merge_merge_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for merged merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.mergeWhenPipelineSucceeds">merge_when_pipeline_succeeds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for merged merge requests when the pipeline succeeds. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.movedProject">moved_project</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for moved projects. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.newIssue">new_issue</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for new issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.newMergeRequest">new_merge_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for new merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.newNote">new_note</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for new notes on merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.pushToMergeRequest">push_to_merge_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for push to merge request branches. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reassignIssue">reassign_issue</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for issue reassignments. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reassignMergeRequest">reassign_merge_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for merge request reassignments. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reopenIssue">reopen_issue</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for reopened issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reopenMergeRequest">reopen_merge_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for reopened merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.successPipeline">success_pipeline</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for successful pipelines. Can only be used when `level` is `custom`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID or URL-encoded path of a project where notifications will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#project ProjectLevelNotifications#project}

---

##### `close_issue`<sup>Optional</sup> <a name="close_issue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.closeIssue"></a>

```python
close_issue: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for closed issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#close_issue ProjectLevelNotifications#close_issue}

---

##### `close_merge_request`<sup>Optional</sup> <a name="close_merge_request" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.closeMergeRequest"></a>

```python
close_merge_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for closed merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#close_merge_request ProjectLevelNotifications#close_merge_request}

---

##### `failed_pipeline`<sup>Optional</sup> <a name="failed_pipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.failedPipeline"></a>

```python
failed_pipeline: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for failed pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#failed_pipeline ProjectLevelNotifications#failed_pipeline}

---

##### `fixed_pipeline`<sup>Optional</sup> <a name="fixed_pipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.fixedPipeline"></a>

```python
fixed_pipeline: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for fixed pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#fixed_pipeline ProjectLevelNotifications#fixed_pipeline}

---

##### `issue_due`<sup>Optional</sup> <a name="issue_due" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.issueDue"></a>

```python
issue_due: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for due issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#issue_due ProjectLevelNotifications#issue_due}

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.level"></a>

```python
level: str
```

- *Type:* str

The level of the notification. Valid values are: `disabled`, `participating`, `watch`, `global`, `mention`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#level ProjectLevelNotifications#level}

---

##### `merge_merge_request`<sup>Optional</sup> <a name="merge_merge_request" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.mergeMergeRequest"></a>

```python
merge_merge_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for merged merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#merge_merge_request ProjectLevelNotifications#merge_merge_request}

---

##### `merge_when_pipeline_succeeds`<sup>Optional</sup> <a name="merge_when_pipeline_succeeds" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.mergeWhenPipelineSucceeds"></a>

```python
merge_when_pipeline_succeeds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for merged merge requests when the pipeline succeeds. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#merge_when_pipeline_succeeds ProjectLevelNotifications#merge_when_pipeline_succeeds}

---

##### `moved_project`<sup>Optional</sup> <a name="moved_project" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.movedProject"></a>

```python
moved_project: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for moved projects. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#moved_project ProjectLevelNotifications#moved_project}

---

##### `new_issue`<sup>Optional</sup> <a name="new_issue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.newIssue"></a>

```python
new_issue: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for new issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#new_issue ProjectLevelNotifications#new_issue}

---

##### `new_merge_request`<sup>Optional</sup> <a name="new_merge_request" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.newMergeRequest"></a>

```python
new_merge_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for new merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#new_merge_request ProjectLevelNotifications#new_merge_request}

---

##### `new_note`<sup>Optional</sup> <a name="new_note" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.newNote"></a>

```python
new_note: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for new notes on merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#new_note ProjectLevelNotifications#new_note}

---

##### `push_to_merge_request`<sup>Optional</sup> <a name="push_to_merge_request" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.pushToMergeRequest"></a>

```python
push_to_merge_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for push to merge request branches. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#push_to_merge_request ProjectLevelNotifications#push_to_merge_request}

---

##### `reassign_issue`<sup>Optional</sup> <a name="reassign_issue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reassignIssue"></a>

```python
reassign_issue: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for issue reassignments. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#reassign_issue ProjectLevelNotifications#reassign_issue}

---

##### `reassign_merge_request`<sup>Optional</sup> <a name="reassign_merge_request" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reassignMergeRequest"></a>

```python
reassign_merge_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for merge request reassignments. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#reassign_merge_request ProjectLevelNotifications#reassign_merge_request}

---

##### `reopen_issue`<sup>Optional</sup> <a name="reopen_issue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reopenIssue"></a>

```python
reopen_issue: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for reopened issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#reopen_issue ProjectLevelNotifications#reopen_issue}

---

##### `reopen_merge_request`<sup>Optional</sup> <a name="reopen_merge_request" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reopenMergeRequest"></a>

```python
reopen_merge_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for reopened merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#reopen_merge_request ProjectLevelNotifications#reopen_merge_request}

---

##### `success_pipeline`<sup>Optional</sup> <a name="success_pipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.successPipeline"></a>

```python
success_pipeline: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for successful pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_level_notifications#success_pipeline ProjectLevelNotifications#success_pipeline}

---



