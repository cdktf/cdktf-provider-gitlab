# `groupLevelMrApprovals` Submodule <a name="`groupLevelMrApprovals` Submodule" id="@cdktf/provider-gitlab.groupLevelMrApprovals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupLevelMrApprovals <a name="GroupLevelMrApprovals" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_level_mr_approvals gitlab_group_level_mr_approvals}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_level_mr_approvals

groupLevelMrApprovals.GroupLevelMrApprovals(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  group: str,
  allow_author_approval: bool | IResolvable = None,
  allow_committer_approval: bool | IResolvable = None,
  allow_overrides_to_approver_list_per_merge_request: bool | IResolvable = None,
  keep_settings_on_destroy: bool | IResolvable = None,
  require_reauthentication_to_approve: bool | IResolvable = None,
  retain_approvals_on_push: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.group">group</a></code> | <code>str</code> | The ID or URL-encoded path of the group. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.allowAuthorApproval">allow_author_approval</a></code> | <code>bool \| cdktf.IResolvable</code> | Allow or prevent authors from self approving merge requests; `true` means authors can self approve. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.allowCommitterApproval">allow_committer_approval</a></code> | <code>bool \| cdktf.IResolvable</code> | Allow or prevent committers from self approving merge requests. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.allowOverridesToApproverListPerMergeRequest">allow_overrides_to_approver_list_per_merge_request</a></code> | <code>bool \| cdktf.IResolvable</code> | Allow or prevent overriding approvers per merge request. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.keepSettingsOnDestroy">keep_settings_on_destroy</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true if the group merge request approval settings should not be reset to their pre-terraform defaults on destroy. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.requireReauthenticationToApprove">require_reauthentication_to_approve</a></code> | <code>bool \| cdktf.IResolvable</code> | Require approver to authenticate before adding the approval. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.retainApprovalsOnPush">retain_approvals_on_push</a></code> | <code>bool \| cdktf.IResolvable</code> | Retain approval count on a new push. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.group"></a>

- *Type:* str

The ID or URL-encoded path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_level_mr_approvals#group GroupLevelMrApprovals#group}

---

##### `allow_author_approval`<sup>Optional</sup> <a name="allow_author_approval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.allowAuthorApproval"></a>

- *Type:* bool | cdktf.IResolvable

Allow or prevent authors from self approving merge requests; `true` means authors can self approve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_level_mr_approvals#allow_author_approval GroupLevelMrApprovals#allow_author_approval}

---

##### `allow_committer_approval`<sup>Optional</sup> <a name="allow_committer_approval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.allowCommitterApproval"></a>

- *Type:* bool | cdktf.IResolvable

Allow or prevent committers from self approving merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_level_mr_approvals#allow_committer_approval GroupLevelMrApprovals#allow_committer_approval}

---

##### `allow_overrides_to_approver_list_per_merge_request`<sup>Optional</sup> <a name="allow_overrides_to_approver_list_per_merge_request" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.allowOverridesToApproverListPerMergeRequest"></a>

- *Type:* bool | cdktf.IResolvable

Allow or prevent overriding approvers per merge request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_level_mr_approvals#allow_overrides_to_approver_list_per_merge_request GroupLevelMrApprovals#allow_overrides_to_approver_list_per_merge_request}

---

##### `keep_settings_on_destroy`<sup>Optional</sup> <a name="keep_settings_on_destroy" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.keepSettingsOnDestroy"></a>

- *Type:* bool | cdktf.IResolvable

Set to true if the group merge request approval settings should not be reset to their pre-terraform defaults on destroy.

You will need to apply the resource with the new setting before destroying the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_level_mr_approvals#keep_settings_on_destroy GroupLevelMrApprovals#keep_settings_on_destroy}

---

##### `require_reauthentication_to_approve`<sup>Optional</sup> <a name="require_reauthentication_to_approve" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.requireReauthenticationToApprove"></a>

- *Type:* bool | cdktf.IResolvable

Require approver to authenticate before adding the approval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_level_mr_approvals#require_reauthentication_to_approve GroupLevelMrApprovals#require_reauthentication_to_approve}

---

##### `retain_approvals_on_push`<sup>Optional</sup> <a name="retain_approvals_on_push" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.retainApprovalsOnPush"></a>

- *Type:* bool | cdktf.IResolvable

Retain approval count on a new push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_level_mr_approvals#retain_approvals_on_push GroupLevelMrApprovals#retain_approvals_on_push}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowAuthorApproval">reset_allow_author_approval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowCommitterApproval">reset_allow_committer_approval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowOverridesToApproverListPerMergeRequest">reset_allow_overrides_to_approver_list_per_merge_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetKeepSettingsOnDestroy">reset_keep_settings_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetRequireReauthenticationToApprove">reset_require_reauthentication_to_approve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetRetainApprovalsOnPush">reset_retain_approvals_on_push</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allow_author_approval` <a name="reset_allow_author_approval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowAuthorApproval"></a>

```python
def reset_allow_author_approval() -> None
```

##### `reset_allow_committer_approval` <a name="reset_allow_committer_approval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowCommitterApproval"></a>

```python
def reset_allow_committer_approval() -> None
```

##### `reset_allow_overrides_to_approver_list_per_merge_request` <a name="reset_allow_overrides_to_approver_list_per_merge_request" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowOverridesToApproverListPerMergeRequest"></a>

```python
def reset_allow_overrides_to_approver_list_per_merge_request() -> None
```

##### `reset_keep_settings_on_destroy` <a name="reset_keep_settings_on_destroy" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetKeepSettingsOnDestroy"></a>

```python
def reset_keep_settings_on_destroy() -> None
```

##### `reset_require_reauthentication_to_approve` <a name="reset_require_reauthentication_to_approve" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetRequireReauthenticationToApprove"></a>

```python
def reset_require_reauthentication_to_approve() -> None
```

##### `reset_retain_approvals_on_push` <a name="reset_retain_approvals_on_push" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetRetainApprovalsOnPush"></a>

```python
def reset_retain_approvals_on_push() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GroupLevelMrApprovals resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import group_level_mr_approvals

groupLevelMrApprovals.GroupLevelMrApprovals.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import group_level_mr_approvals

groupLevelMrApprovals.GroupLevelMrApprovals.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import group_level_mr_approvals

groupLevelMrApprovals.GroupLevelMrApprovals.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import group_level_mr_approvals

groupLevelMrApprovals.GroupLevelMrApprovals.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GroupLevelMrApprovals resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GroupLevelMrApprovals to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GroupLevelMrApprovals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_level_mr_approvals#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GroupLevelMrApprovals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowAuthorApprovalInput">allow_author_approval_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowCommitterApprovalInput">allow_committer_approval_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowOverridesToApproverListPerMergeRequestInput">allow_overrides_to_approver_list_per_merge_request_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.keepSettingsOnDestroyInput">keep_settings_on_destroy_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.requireReauthenticationToApproveInput">require_reauthentication_to_approve_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.retainApprovalsOnPushInput">retain_approvals_on_push_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowAuthorApproval">allow_author_approval</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowCommitterApproval">allow_committer_approval</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowOverridesToApproverListPerMergeRequest">allow_overrides_to_approver_list_per_merge_request</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.keepSettingsOnDestroy">keep_settings_on_destroy</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.requireReauthenticationToApprove">require_reauthentication_to_approve</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.retainApprovalsOnPush">retain_approvals_on_push</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `allow_author_approval_input`<sup>Optional</sup> <a name="allow_author_approval_input" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowAuthorApprovalInput"></a>

```python
allow_author_approval_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `allow_committer_approval_input`<sup>Optional</sup> <a name="allow_committer_approval_input" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowCommitterApprovalInput"></a>

```python
allow_committer_approval_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `allow_overrides_to_approver_list_per_merge_request_input`<sup>Optional</sup> <a name="allow_overrides_to_approver_list_per_merge_request_input" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowOverridesToApproverListPerMergeRequestInput"></a>

```python
allow_overrides_to_approver_list_per_merge_request_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `keep_settings_on_destroy_input`<sup>Optional</sup> <a name="keep_settings_on_destroy_input" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.keepSettingsOnDestroyInput"></a>

```python
keep_settings_on_destroy_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `require_reauthentication_to_approve_input`<sup>Optional</sup> <a name="require_reauthentication_to_approve_input" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.requireReauthenticationToApproveInput"></a>

```python
require_reauthentication_to_approve_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `retain_approvals_on_push_input`<sup>Optional</sup> <a name="retain_approvals_on_push_input" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.retainApprovalsOnPushInput"></a>

```python
retain_approvals_on_push_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `allow_author_approval`<sup>Required</sup> <a name="allow_author_approval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowAuthorApproval"></a>

```python
allow_author_approval: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `allow_committer_approval`<sup>Required</sup> <a name="allow_committer_approval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowCommitterApproval"></a>

```python
allow_committer_approval: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `allow_overrides_to_approver_list_per_merge_request`<sup>Required</sup> <a name="allow_overrides_to_approver_list_per_merge_request" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowOverridesToApproverListPerMergeRequest"></a>

```python
allow_overrides_to_approver_list_per_merge_request: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `keep_settings_on_destroy`<sup>Required</sup> <a name="keep_settings_on_destroy" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.keepSettingsOnDestroy"></a>

```python
keep_settings_on_destroy: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `require_reauthentication_to_approve`<sup>Required</sup> <a name="require_reauthentication_to_approve" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.requireReauthenticationToApprove"></a>

```python
require_reauthentication_to_approve: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `retain_approvals_on_push`<sup>Required</sup> <a name="retain_approvals_on_push" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.retainApprovalsOnPush"></a>

```python
retain_approvals_on_push: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GroupLevelMrApprovalsConfig <a name="GroupLevelMrApprovalsConfig" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_level_mr_approvals

groupLevelMrApprovals.GroupLevelMrApprovalsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  group: str,
  allow_author_approval: bool | IResolvable = None,
  allow_committer_approval: bool | IResolvable = None,
  allow_overrides_to_approver_list_per_merge_request: bool | IResolvable = None,
  keep_settings_on_destroy: bool | IResolvable = None,
  require_reauthentication_to_approve: bool | IResolvable = None,
  retain_approvals_on_push: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.group">group</a></code> | <code>str</code> | The ID or URL-encoded path of the group. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowAuthorApproval">allow_author_approval</a></code> | <code>bool \| cdktf.IResolvable</code> | Allow or prevent authors from self approving merge requests; `true` means authors can self approve. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowCommitterApproval">allow_committer_approval</a></code> | <code>bool \| cdktf.IResolvable</code> | Allow or prevent committers from self approving merge requests. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowOverridesToApproverListPerMergeRequest">allow_overrides_to_approver_list_per_merge_request</a></code> | <code>bool \| cdktf.IResolvable</code> | Allow or prevent overriding approvers per merge request. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.keepSettingsOnDestroy">keep_settings_on_destroy</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true if the group merge request approval settings should not be reset to their pre-terraform defaults on destroy. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.requireReauthenticationToApprove">require_reauthentication_to_approve</a></code> | <code>bool \| cdktf.IResolvable</code> | Require approver to authenticate before adding the approval. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.retainApprovalsOnPush">retain_approvals_on_push</a></code> | <code>bool \| cdktf.IResolvable</code> | Retain approval count on a new push. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.group"></a>

```python
group: str
```

- *Type:* str

The ID or URL-encoded path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_level_mr_approvals#group GroupLevelMrApprovals#group}

---

##### `allow_author_approval`<sup>Optional</sup> <a name="allow_author_approval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowAuthorApproval"></a>

```python
allow_author_approval: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Allow or prevent authors from self approving merge requests; `true` means authors can self approve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_level_mr_approvals#allow_author_approval GroupLevelMrApprovals#allow_author_approval}

---

##### `allow_committer_approval`<sup>Optional</sup> <a name="allow_committer_approval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowCommitterApproval"></a>

```python
allow_committer_approval: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Allow or prevent committers from self approving merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_level_mr_approvals#allow_committer_approval GroupLevelMrApprovals#allow_committer_approval}

---

##### `allow_overrides_to_approver_list_per_merge_request`<sup>Optional</sup> <a name="allow_overrides_to_approver_list_per_merge_request" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowOverridesToApproverListPerMergeRequest"></a>

```python
allow_overrides_to_approver_list_per_merge_request: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Allow or prevent overriding approvers per merge request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_level_mr_approvals#allow_overrides_to_approver_list_per_merge_request GroupLevelMrApprovals#allow_overrides_to_approver_list_per_merge_request}

---

##### `keep_settings_on_destroy`<sup>Optional</sup> <a name="keep_settings_on_destroy" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.keepSettingsOnDestroy"></a>

```python
keep_settings_on_destroy: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Set to true if the group merge request approval settings should not be reset to their pre-terraform defaults on destroy.

You will need to apply the resource with the new setting before destroying the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_level_mr_approvals#keep_settings_on_destroy GroupLevelMrApprovals#keep_settings_on_destroy}

---

##### `require_reauthentication_to_approve`<sup>Optional</sup> <a name="require_reauthentication_to_approve" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.requireReauthenticationToApprove"></a>

```python
require_reauthentication_to_approve: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Require approver to authenticate before adding the approval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_level_mr_approvals#require_reauthentication_to_approve GroupLevelMrApprovals#require_reauthentication_to_approve}

---

##### `retain_approvals_on_push`<sup>Optional</sup> <a name="retain_approvals_on_push" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.retainApprovalsOnPush"></a>

```python
retain_approvals_on_push: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Retain approval count on a new push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_level_mr_approvals#retain_approvals_on_push GroupLevelMrApprovals#retain_approvals_on_push}

---



