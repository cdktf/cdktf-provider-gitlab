# `projectLevelMrApprovals` Submodule <a name="`projectLevelMrApprovals` Submodule" id="@cdktf/provider-gitlab.projectLevelMrApprovals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectLevelMrApprovals <a name="ProjectLevelMrApprovals" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals gitlab_project_level_mr_approvals}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_level_mr_approvals

projectLevelMrApprovals.ProjectLevelMrApprovals(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: typing.Union[int, float],
  disable_overriding_approvers_per_merge_request: typing.Union[bool, IResolvable] = None,
  id: str = None,
  merge_requests_author_approval: typing.Union[bool, IResolvable] = None,
  merge_requests_disable_committers_approval: typing.Union[bool, IResolvable] = None,
  require_password_to_approve: typing.Union[bool, IResolvable] = None,
  reset_approvals_on_push: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.projectId">project_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the project to change MR approval configuration. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.disableOverridingApproversPerMergeRequest">disable_overriding_approvers_per_merge_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | By default, users are able to edit the approval rules in merge requests. If set to true,. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals#id ProjectLevelMrApprovals#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.mergeRequestsAuthorApproval">merge_requests_author_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to `true` if you want to allow merge request authors to self-approve merge requests. Authors. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.mergeRequestsDisableCommittersApproval">merge_requests_disable_committers_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to `true` if you want to prevent approval of merge requests by merge request committers. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.requirePasswordToApprove">require_password_to_approve</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to `true` if you want to require authentication when approving a merge request. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.resetApprovalsOnPush">reset_approvals_on_push</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to `true` if you want to remove all approvals in a merge request when new commits are pushed to its source branch. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.projectId"></a>

- *Type:* typing.Union[int, float]

The ID of the project to change MR approval configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals#project_id ProjectLevelMrApprovals#project_id}

---

##### `disable_overriding_approvers_per_merge_request`<sup>Optional</sup> <a name="disable_overriding_approvers_per_merge_request" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.disableOverridingApproversPerMergeRequest"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

By default, users are able to edit the approval rules in merge requests. If set to true,.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals#disable_overriding_approvers_per_merge_request ProjectLevelMrApprovals#disable_overriding_approvers_per_merge_request}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals#id ProjectLevelMrApprovals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `merge_requests_author_approval`<sup>Optional</sup> <a name="merge_requests_author_approval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.mergeRequestsAuthorApproval"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to `true` if you want to allow merge request authors to self-approve merge requests. Authors.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals#merge_requests_author_approval ProjectLevelMrApprovals#merge_requests_author_approval}

---

##### `merge_requests_disable_committers_approval`<sup>Optional</sup> <a name="merge_requests_disable_committers_approval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.mergeRequestsDisableCommittersApproval"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to `true` if you want to prevent approval of merge requests by merge request committers.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals#merge_requests_disable_committers_approval ProjectLevelMrApprovals#merge_requests_disable_committers_approval}

---

##### `require_password_to_approve`<sup>Optional</sup> <a name="require_password_to_approve" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.requirePasswordToApprove"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to `true` if you want to require authentication when approving a merge request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals#require_password_to_approve ProjectLevelMrApprovals#require_password_to_approve}

---

##### `reset_approvals_on_push`<sup>Optional</sup> <a name="reset_approvals_on_push" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.resetApprovalsOnPush"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to `true` if you want to remove all approvals in a merge request when new commits are pushed to its source branch.

Default is `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals#reset_approvals_on_push ProjectLevelMrApprovals#reset_approvals_on_push}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetDisableOverridingApproversPerMergeRequest">reset_disable_overriding_approvers_per_merge_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetMergeRequestsAuthorApproval">reset_merge_requests_author_approval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetMergeRequestsDisableCommittersApproval">reset_merge_requests_disable_committers_approval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetRequirePasswordToApprove">reset_require_password_to_approve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetResetApprovalsOnPush">reset_reset_approvals_on_push</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_disable_overriding_approvers_per_merge_request` <a name="reset_disable_overriding_approvers_per_merge_request" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetDisableOverridingApproversPerMergeRequest"></a>

```python
def reset_disable_overriding_approvers_per_merge_request() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_merge_requests_author_approval` <a name="reset_merge_requests_author_approval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetMergeRequestsAuthorApproval"></a>

```python
def reset_merge_requests_author_approval() -> None
```

##### `reset_merge_requests_disable_committers_approval` <a name="reset_merge_requests_disable_committers_approval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetMergeRequestsDisableCommittersApproval"></a>

```python
def reset_merge_requests_disable_committers_approval() -> None
```

##### `reset_require_password_to_approve` <a name="reset_require_password_to_approve" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetRequirePasswordToApprove"></a>

```python
def reset_require_password_to_approve() -> None
```

##### `reset_reset_approvals_on_push` <a name="reset_reset_approvals_on_push" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetResetApprovalsOnPush"></a>

```python
def reset_reset_approvals_on_push() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import project_level_mr_approvals

projectLevelMrApprovals.ProjectLevelMrApprovals.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import project_level_mr_approvals

projectLevelMrApprovals.ProjectLevelMrApprovals.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import project_level_mr_approvals

projectLevelMrApprovals.ProjectLevelMrApprovals.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.disableOverridingApproversPerMergeRequestInput">disable_overriding_approvers_per_merge_request_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsAuthorApprovalInput">merge_requests_author_approval_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsDisableCommittersApprovalInput">merge_requests_disable_committers_approval_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.projectIdInput">project_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.requirePasswordToApproveInput">require_password_to_approve_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.resetApprovalsOnPushInput">reset_approvals_on_push_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.disableOverridingApproversPerMergeRequest">disable_overriding_approvers_per_merge_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsAuthorApproval">merge_requests_author_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsDisableCommittersApproval">merge_requests_disable_committers_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.projectId">project_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.requirePasswordToApprove">require_password_to_approve</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.resetApprovalsOnPush">reset_approvals_on_push</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disable_overriding_approvers_per_merge_request_input`<sup>Optional</sup> <a name="disable_overriding_approvers_per_merge_request_input" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.disableOverridingApproversPerMergeRequestInput"></a>

```python
disable_overriding_approvers_per_merge_request_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `merge_requests_author_approval_input`<sup>Optional</sup> <a name="merge_requests_author_approval_input" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsAuthorApprovalInput"></a>

```python
merge_requests_author_approval_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `merge_requests_disable_committers_approval_input`<sup>Optional</sup> <a name="merge_requests_disable_committers_approval_input" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsDisableCommittersApprovalInput"></a>

```python
merge_requests_disable_committers_approval_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.projectIdInput"></a>

```python
project_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `require_password_to_approve_input`<sup>Optional</sup> <a name="require_password_to_approve_input" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.requirePasswordToApproveInput"></a>

```python
require_password_to_approve_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reset_approvals_on_push_input`<sup>Optional</sup> <a name="reset_approvals_on_push_input" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.resetApprovalsOnPushInput"></a>

```python
reset_approvals_on_push_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_overriding_approvers_per_merge_request`<sup>Required</sup> <a name="disable_overriding_approvers_per_merge_request" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.disableOverridingApproversPerMergeRequest"></a>

```python
disable_overriding_approvers_per_merge_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `merge_requests_author_approval`<sup>Required</sup> <a name="merge_requests_author_approval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsAuthorApproval"></a>

```python
merge_requests_author_approval: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `merge_requests_disable_committers_approval`<sup>Required</sup> <a name="merge_requests_disable_committers_approval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsDisableCommittersApproval"></a>

```python
merge_requests_disable_committers_approval: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.projectId"></a>

```python
project_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `require_password_to_approve`<sup>Required</sup> <a name="require_password_to_approve" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.requirePasswordToApprove"></a>

```python
require_password_to_approve: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reset_approvals_on_push`<sup>Required</sup> <a name="reset_approvals_on_push" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.resetApprovalsOnPush"></a>

```python
reset_approvals_on_push: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectLevelMrApprovalsConfig <a name="ProjectLevelMrApprovalsConfig" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_level_mr_approvals

projectLevelMrApprovals.ProjectLevelMrApprovalsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: typing.Union[int, float],
  disable_overriding_approvers_per_merge_request: typing.Union[bool, IResolvable] = None,
  id: str = None,
  merge_requests_author_approval: typing.Union[bool, IResolvable] = None,
  merge_requests_disable_committers_approval: typing.Union[bool, IResolvable] = None,
  require_password_to_approve: typing.Union[bool, IResolvable] = None,
  reset_approvals_on_push: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.projectId">project_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the project to change MR approval configuration. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.disableOverridingApproversPerMergeRequest">disable_overriding_approvers_per_merge_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | By default, users are able to edit the approval rules in merge requests. If set to true,. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals#id ProjectLevelMrApprovals#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.mergeRequestsAuthorApproval">merge_requests_author_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to `true` if you want to allow merge request authors to self-approve merge requests. Authors. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.mergeRequestsDisableCommittersApproval">merge_requests_disable_committers_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to `true` if you want to prevent approval of merge requests by merge request committers. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.requirePasswordToApprove">require_password_to_approve</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to `true` if you want to require authentication when approving a merge request. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.resetApprovalsOnPush">reset_approvals_on_push</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to `true` if you want to remove all approvals in a merge request when new commits are pushed to its source branch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.projectId"></a>

```python
project_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the project to change MR approval configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals#project_id ProjectLevelMrApprovals#project_id}

---

##### `disable_overriding_approvers_per_merge_request`<sup>Optional</sup> <a name="disable_overriding_approvers_per_merge_request" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.disableOverridingApproversPerMergeRequest"></a>

```python
disable_overriding_approvers_per_merge_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

By default, users are able to edit the approval rules in merge requests. If set to true,.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals#disable_overriding_approvers_per_merge_request ProjectLevelMrApprovals#disable_overriding_approvers_per_merge_request}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals#id ProjectLevelMrApprovals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `merge_requests_author_approval`<sup>Optional</sup> <a name="merge_requests_author_approval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.mergeRequestsAuthorApproval"></a>

```python
merge_requests_author_approval: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to `true` if you want to allow merge request authors to self-approve merge requests. Authors.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals#merge_requests_author_approval ProjectLevelMrApprovals#merge_requests_author_approval}

---

##### `merge_requests_disable_committers_approval`<sup>Optional</sup> <a name="merge_requests_disable_committers_approval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.mergeRequestsDisableCommittersApproval"></a>

```python
merge_requests_disable_committers_approval: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to `true` if you want to prevent approval of merge requests by merge request committers.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals#merge_requests_disable_committers_approval ProjectLevelMrApprovals#merge_requests_disable_committers_approval}

---

##### `require_password_to_approve`<sup>Optional</sup> <a name="require_password_to_approve" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.requirePasswordToApprove"></a>

```python
require_password_to_approve: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to `true` if you want to require authentication when approving a merge request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals#require_password_to_approve ProjectLevelMrApprovals#require_password_to_approve}

---

##### `reset_approvals_on_push`<sup>Optional</sup> <a name="reset_approvals_on_push" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.resetApprovalsOnPush"></a>

```python
reset_approvals_on_push: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to `true` if you want to remove all approvals in a merge request when new commits are pushed to its source branch.

Default is `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_level_mr_approvals#reset_approvals_on_push ProjectLevelMrApprovals#reset_approvals_on_push}

---



