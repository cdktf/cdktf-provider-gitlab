# `branchProtection` Submodule <a name="`branchProtection` Submodule" id="@cdktf/provider-gitlab.branchProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BranchProtection <a name="BranchProtection" id="@cdktf/provider-gitlab.branchProtection.BranchProtection"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection gitlab_branch_protection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import branch_protection

branchProtection.BranchProtection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  branch: str,
  project: str,
  allowed_to_merge: typing.Union[IResolvable, typing.List[BranchProtectionAllowedToMerge]] = None,
  allowed_to_push: typing.Union[IResolvable, typing.List[BranchProtectionAllowedToPush]] = None,
  allowed_to_unprotect: typing.Union[IResolvable, typing.List[BranchProtectionAllowedToUnprotect]] = None,
  allow_force_push: typing.Union[bool, IResolvable] = None,
  code_owner_approval_required: typing.Union[bool, IResolvable] = None,
  id: str = None,
  merge_access_level: str = None,
  push_access_level: str = None,
  unprotect_access_level: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.branch">branch</a></code> | <code>str</code> | Name of the branch. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.project">project</a></code> | <code>str</code> | The id of the project. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.allowedToMerge">allowed_to_merge</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>]]</code> | allowed_to_merge block. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.allowedToPush">allowed_to_push</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>]]</code> | allowed_to_push block. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.allowedToUnprotect">allowed_to_unprotect</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>]]</code> | allowed_to_unprotect block. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.allowForcePush">allow_force_push</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Can be set to true to allow users with push access to force push. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.codeOwnerApprovalRequired">code_owner_approval_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Can be set to true to require code owner approval before merging. Only available own Premium and Ultimate instances. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#id BranchProtection#id}. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.mergeAccessLevel">merge_access_level</a></code> | <code>str</code> | Access levels allowed to merge. Valid values are: `no one`, `developer`, `maintainer`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.pushAccessLevel">push_access_level</a></code> | <code>str</code> | Access levels allowed to push. Valid values are: `no one`, `developer`, `maintainer`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.unprotectAccessLevel">unprotect_access_level</a></code> | <code>str</code> | Access levels allowed to unprotect. Valid values are: `developer`, `maintainer`, `admin`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.branch"></a>

- *Type:* str

Name of the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#branch BranchProtection#branch}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.project"></a>

- *Type:* str

The id of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#project BranchProtection#project}

---

##### `allowed_to_merge`<sup>Optional</sup> <a name="allowed_to_merge" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.allowedToMerge"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>]]

allowed_to_merge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#allowed_to_merge BranchProtection#allowed_to_merge}

---

##### `allowed_to_push`<sup>Optional</sup> <a name="allowed_to_push" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.allowedToPush"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>]]

allowed_to_push block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#allowed_to_push BranchProtection#allowed_to_push}

---

##### `allowed_to_unprotect`<sup>Optional</sup> <a name="allowed_to_unprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.allowedToUnprotect"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>]]

allowed_to_unprotect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#allowed_to_unprotect BranchProtection#allowed_to_unprotect}

---

##### `allow_force_push`<sup>Optional</sup> <a name="allow_force_push" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.allowForcePush"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Can be set to true to allow users with push access to force push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#allow_force_push BranchProtection#allow_force_push}

---

##### `code_owner_approval_required`<sup>Optional</sup> <a name="code_owner_approval_required" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.codeOwnerApprovalRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Can be set to true to require code owner approval before merging. Only available own Premium and Ultimate instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#code_owner_approval_required BranchProtection#code_owner_approval_required}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#id BranchProtection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `merge_access_level`<sup>Optional</sup> <a name="merge_access_level" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.mergeAccessLevel"></a>

- *Type:* str

Access levels allowed to merge. Valid values are: `no one`, `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#merge_access_level BranchProtection#merge_access_level}

---

##### `push_access_level`<sup>Optional</sup> <a name="push_access_level" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.pushAccessLevel"></a>

- *Type:* str

Access levels allowed to push. Valid values are: `no one`, `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#push_access_level BranchProtection#push_access_level}

---

##### `unprotect_access_level`<sup>Optional</sup> <a name="unprotect_access_level" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.unprotectAccessLevel"></a>

- *Type:* str

Access levels allowed to unprotect. Valid values are: `developer`, `maintainer`, `admin`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#unprotect_access_level BranchProtection#unprotect_access_level}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToMerge">put_allowed_to_merge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToPush">put_allowed_to_push</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToUnprotect">put_allowed_to_unprotect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToMerge">reset_allowed_to_merge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToPush">reset_allowed_to_push</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToUnprotect">reset_allowed_to_unprotect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowForcePush">reset_allow_force_push</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetCodeOwnerApprovalRequired">reset_code_owner_approval_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetMergeAccessLevel">reset_merge_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetPushAccessLevel">reset_push_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetUnprotectAccessLevel">reset_unprotect_access_level</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_allowed_to_merge` <a name="put_allowed_to_merge" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToMerge"></a>

```python
def put_allowed_to_merge(
  value: typing.Union[IResolvable, typing.List[BranchProtectionAllowedToMerge]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToMerge.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>]]

---

##### `put_allowed_to_push` <a name="put_allowed_to_push" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToPush"></a>

```python
def put_allowed_to_push(
  value: typing.Union[IResolvable, typing.List[BranchProtectionAllowedToPush]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToPush.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>]]

---

##### `put_allowed_to_unprotect` <a name="put_allowed_to_unprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToUnprotect"></a>

```python
def put_allowed_to_unprotect(
  value: typing.Union[IResolvable, typing.List[BranchProtectionAllowedToUnprotect]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToUnprotect.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>]]

---

##### `reset_allowed_to_merge` <a name="reset_allowed_to_merge" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToMerge"></a>

```python
def reset_allowed_to_merge() -> None
```

##### `reset_allowed_to_push` <a name="reset_allowed_to_push" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToPush"></a>

```python
def reset_allowed_to_push() -> None
```

##### `reset_allowed_to_unprotect` <a name="reset_allowed_to_unprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToUnprotect"></a>

```python
def reset_allowed_to_unprotect() -> None
```

##### `reset_allow_force_push` <a name="reset_allow_force_push" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowForcePush"></a>

```python
def reset_allow_force_push() -> None
```

##### `reset_code_owner_approval_required` <a name="reset_code_owner_approval_required" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetCodeOwnerApprovalRequired"></a>

```python
def reset_code_owner_approval_required() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_merge_access_level` <a name="reset_merge_access_level" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetMergeAccessLevel"></a>

```python
def reset_merge_access_level() -> None
```

##### `reset_push_access_level` <a name="reset_push_access_level" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetPushAccessLevel"></a>

```python
def reset_push_access_level() -> None
```

##### `reset_unprotect_access_level` <a name="reset_unprotect_access_level" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetUnprotectAccessLevel"></a>

```python
def reset_unprotect_access_level() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BranchProtection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import branch_protection

branchProtection.BranchProtection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import branch_protection

branchProtection.BranchProtection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import branch_protection

branchProtection.BranchProtection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import branch_protection

branchProtection.BranchProtection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BranchProtection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BranchProtection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BranchProtection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BranchProtection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToMerge">allowed_to_merge</a></code> | <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList">BranchProtectionAllowedToMergeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToPush">allowed_to_push</a></code> | <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList">BranchProtectionAllowedToPushList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToUnprotect">allowed_to_unprotect</a></code> | <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList">BranchProtectionAllowedToUnprotectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branchProtectionId">branch_protection_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToMergeInput">allowed_to_merge_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToPushInput">allowed_to_push_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToUnprotectInput">allowed_to_unprotect_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowForcePushInput">allow_force_push_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.codeOwnerApprovalRequiredInput">code_owner_approval_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.mergeAccessLevelInput">merge_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.pushAccessLevelInput">push_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.unprotectAccessLevelInput">unprotect_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowForcePush">allow_force_push</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.codeOwnerApprovalRequired">code_owner_approval_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.mergeAccessLevel">merge_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.pushAccessLevel">push_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.unprotectAccessLevel">unprotect_access_level</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_to_merge`<sup>Required</sup> <a name="allowed_to_merge" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToMerge"></a>

```python
allowed_to_merge: BranchProtectionAllowedToMergeList
```

- *Type:* <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList">BranchProtectionAllowedToMergeList</a>

---

##### `allowed_to_push`<sup>Required</sup> <a name="allowed_to_push" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToPush"></a>

```python
allowed_to_push: BranchProtectionAllowedToPushList
```

- *Type:* <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList">BranchProtectionAllowedToPushList</a>

---

##### `allowed_to_unprotect`<sup>Required</sup> <a name="allowed_to_unprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToUnprotect"></a>

```python
allowed_to_unprotect: BranchProtectionAllowedToUnprotectList
```

- *Type:* <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList">BranchProtectionAllowedToUnprotectList</a>

---

##### `branch_protection_id`<sup>Required</sup> <a name="branch_protection_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branchProtectionId"></a>

```python
branch_protection_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_to_merge_input`<sup>Optional</sup> <a name="allowed_to_merge_input" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToMergeInput"></a>

```python
allowed_to_merge_input: typing.Union[IResolvable, typing.List[BranchProtectionAllowedToMerge]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>]]

---

##### `allowed_to_push_input`<sup>Optional</sup> <a name="allowed_to_push_input" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToPushInput"></a>

```python
allowed_to_push_input: typing.Union[IResolvable, typing.List[BranchProtectionAllowedToPush]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>]]

---

##### `allowed_to_unprotect_input`<sup>Optional</sup> <a name="allowed_to_unprotect_input" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToUnprotectInput"></a>

```python
allowed_to_unprotect_input: typing.Union[IResolvable, typing.List[BranchProtectionAllowedToUnprotect]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>]]

---

##### `allow_force_push_input`<sup>Optional</sup> <a name="allow_force_push_input" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowForcePushInput"></a>

```python
allow_force_push_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `code_owner_approval_required_input`<sup>Optional</sup> <a name="code_owner_approval_required_input" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.codeOwnerApprovalRequiredInput"></a>

```python
code_owner_approval_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `merge_access_level_input`<sup>Optional</sup> <a name="merge_access_level_input" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.mergeAccessLevelInput"></a>

```python
merge_access_level_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `push_access_level_input`<sup>Optional</sup> <a name="push_access_level_input" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.pushAccessLevelInput"></a>

```python
push_access_level_input: str
```

- *Type:* str

---

##### `unprotect_access_level_input`<sup>Optional</sup> <a name="unprotect_access_level_input" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.unprotectAccessLevelInput"></a>

```python
unprotect_access_level_input: str
```

- *Type:* str

---

##### `allow_force_push`<sup>Required</sup> <a name="allow_force_push" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowForcePush"></a>

```python
allow_force_push: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `code_owner_approval_required`<sup>Required</sup> <a name="code_owner_approval_required" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.codeOwnerApprovalRequired"></a>

```python
code_owner_approval_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `merge_access_level`<sup>Required</sup> <a name="merge_access_level" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.mergeAccessLevel"></a>

```python
merge_access_level: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `push_access_level`<sup>Required</sup> <a name="push_access_level" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.pushAccessLevel"></a>

```python
push_access_level: str
```

- *Type:* str

---

##### `unprotect_access_level`<sup>Required</sup> <a name="unprotect_access_level" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.unprotectAccessLevel"></a>

```python
unprotect_access_level: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BranchProtectionAllowedToMerge <a name="BranchProtectionAllowedToMerge" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import branch_protection

branchProtection.BranchProtectionAllowedToMerge(
  group_id: typing.Union[int, float] = None,
  user_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`. |

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#group_id BranchProtection#group_id}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#user_id BranchProtection#user_id}

---

### BranchProtectionAllowedToPush <a name="BranchProtectionAllowedToPush" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import branch_protection

branchProtection.BranchProtectionAllowedToPush(
  group_id: typing.Union[int, float] = None,
  user_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`. |

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#group_id BranchProtection#group_id}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#user_id BranchProtection#user_id}

---

### BranchProtectionAllowedToUnprotect <a name="BranchProtectionAllowedToUnprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import branch_protection

branchProtection.BranchProtectionAllowedToUnprotect(
  group_id: typing.Union[int, float] = None,
  user_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`. |

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#group_id BranchProtection#group_id}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#user_id BranchProtection#user_id}

---

### BranchProtectionConfig <a name="BranchProtectionConfig" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import branch_protection

branchProtection.BranchProtectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  branch: str,
  project: str,
  allowed_to_merge: typing.Union[IResolvable, typing.List[BranchProtectionAllowedToMerge]] = None,
  allowed_to_push: typing.Union[IResolvable, typing.List[BranchProtectionAllowedToPush]] = None,
  allowed_to_unprotect: typing.Union[IResolvable, typing.List[BranchProtectionAllowedToUnprotect]] = None,
  allow_force_push: typing.Union[bool, IResolvable] = None,
  code_owner_approval_required: typing.Union[bool, IResolvable] = None,
  id: str = None,
  merge_access_level: str = None,
  push_access_level: str = None,
  unprotect_access_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.branch">branch</a></code> | <code>str</code> | Name of the branch. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.project">project</a></code> | <code>str</code> | The id of the project. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToMerge">allowed_to_merge</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>]]</code> | allowed_to_merge block. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToPush">allowed_to_push</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>]]</code> | allowed_to_push block. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToUnprotect">allowed_to_unprotect</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>]]</code> | allowed_to_unprotect block. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowForcePush">allow_force_push</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Can be set to true to allow users with push access to force push. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.codeOwnerApprovalRequired">code_owner_approval_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Can be set to true to require code owner approval before merging. Only available own Premium and Ultimate instances. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#id BranchProtection#id}. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.mergeAccessLevel">merge_access_level</a></code> | <code>str</code> | Access levels allowed to merge. Valid values are: `no one`, `developer`, `maintainer`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.pushAccessLevel">push_access_level</a></code> | <code>str</code> | Access levels allowed to push. Valid values are: `no one`, `developer`, `maintainer`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.unprotectAccessLevel">unprotect_access_level</a></code> | <code>str</code> | Access levels allowed to unprotect. Valid values are: `developer`, `maintainer`, `admin`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.branch"></a>

```python
branch: str
```

- *Type:* str

Name of the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#branch BranchProtection#branch}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The id of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#project BranchProtection#project}

---

##### `allowed_to_merge`<sup>Optional</sup> <a name="allowed_to_merge" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToMerge"></a>

```python
allowed_to_merge: typing.Union[IResolvable, typing.List[BranchProtectionAllowedToMerge]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>]]

allowed_to_merge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#allowed_to_merge BranchProtection#allowed_to_merge}

---

##### `allowed_to_push`<sup>Optional</sup> <a name="allowed_to_push" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToPush"></a>

```python
allowed_to_push: typing.Union[IResolvable, typing.List[BranchProtectionAllowedToPush]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>]]

allowed_to_push block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#allowed_to_push BranchProtection#allowed_to_push}

---

##### `allowed_to_unprotect`<sup>Optional</sup> <a name="allowed_to_unprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToUnprotect"></a>

```python
allowed_to_unprotect: typing.Union[IResolvable, typing.List[BranchProtectionAllowedToUnprotect]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>]]

allowed_to_unprotect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#allowed_to_unprotect BranchProtection#allowed_to_unprotect}

---

##### `allow_force_push`<sup>Optional</sup> <a name="allow_force_push" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowForcePush"></a>

```python
allow_force_push: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Can be set to true to allow users with push access to force push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#allow_force_push BranchProtection#allow_force_push}

---

##### `code_owner_approval_required`<sup>Optional</sup> <a name="code_owner_approval_required" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.codeOwnerApprovalRequired"></a>

```python
code_owner_approval_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Can be set to true to require code owner approval before merging. Only available own Premium and Ultimate instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#code_owner_approval_required BranchProtection#code_owner_approval_required}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#id BranchProtection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `merge_access_level`<sup>Optional</sup> <a name="merge_access_level" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.mergeAccessLevel"></a>

```python
merge_access_level: str
```

- *Type:* str

Access levels allowed to merge. Valid values are: `no one`, `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#merge_access_level BranchProtection#merge_access_level}

---

##### `push_access_level`<sup>Optional</sup> <a name="push_access_level" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.pushAccessLevel"></a>

```python
push_access_level: str
```

- *Type:* str

Access levels allowed to push. Valid values are: `no one`, `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#push_access_level BranchProtection#push_access_level}

---

##### `unprotect_access_level`<sup>Optional</sup> <a name="unprotect_access_level" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.unprotectAccessLevel"></a>

```python
unprotect_access_level: str
```

- *Type:* str

Access levels allowed to unprotect. Valid values are: `developer`, `maintainer`, `admin`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/branch_protection#unprotect_access_level BranchProtection#unprotect_access_level}

---

## Classes <a name="Classes" id="Classes"></a>

### BranchProtectionAllowedToMergeList <a name="BranchProtectionAllowedToMergeList" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import branch_protection

branchProtection.BranchProtectionAllowedToMergeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BranchProtectionAllowedToMergeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BranchProtectionAllowedToMerge]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>]]

---


### BranchProtectionAllowedToMergeOutputReference <a name="BranchProtectionAllowedToMergeOutputReference" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import branch_protection

branchProtection.BranchProtectionAllowedToMergeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_id` <a name="reset_group_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resetUserId"></a>

```python
def reset_user_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.accessLevelDescription">access_level_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.groupIdInput">group_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.userIdInput">user_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `access_level_description`<sup>Required</sup> <a name="access_level_description" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.accessLevelDescription"></a>

```python
access_level_description: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.groupIdInput"></a>

```python
group_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.userIdInput"></a>

```python
user_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BranchProtectionAllowedToMerge]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge">BranchProtectionAllowedToMerge</a>]

---


### BranchProtectionAllowedToPushList <a name="BranchProtectionAllowedToPushList" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import branch_protection

branchProtection.BranchProtectionAllowedToPushList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BranchProtectionAllowedToPushOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BranchProtectionAllowedToPush]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>]]

---


### BranchProtectionAllowedToPushOutputReference <a name="BranchProtectionAllowedToPushOutputReference" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import branch_protection

branchProtection.BranchProtectionAllowedToPushOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_id` <a name="reset_group_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resetUserId"></a>

```python
def reset_user_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.accessLevelDescription">access_level_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.groupIdInput">group_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.userIdInput">user_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `access_level_description`<sup>Required</sup> <a name="access_level_description" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.accessLevelDescription"></a>

```python
access_level_description: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.groupIdInput"></a>

```python
group_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.userIdInput"></a>

```python
user_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BranchProtectionAllowedToPush]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush">BranchProtectionAllowedToPush</a>]

---


### BranchProtectionAllowedToUnprotectList <a name="BranchProtectionAllowedToUnprotectList" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import branch_protection

branchProtection.BranchProtectionAllowedToUnprotectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BranchProtectionAllowedToUnprotectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BranchProtectionAllowedToUnprotect]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>]]

---


### BranchProtectionAllowedToUnprotectOutputReference <a name="BranchProtectionAllowedToUnprotectOutputReference" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import branch_protection

branchProtection.BranchProtectionAllowedToUnprotectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_id` <a name="reset_group_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resetUserId"></a>

```python
def reset_user_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.accessLevelDescription">access_level_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.groupIdInput">group_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.userIdInput">user_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `access_level_description`<sup>Required</sup> <a name="access_level_description" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.accessLevelDescription"></a>

```python
access_level_description: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.groupIdInput"></a>

```python
group_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.userIdInput"></a>

```python
user_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BranchProtectionAllowedToUnprotect]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect">BranchProtectionAllowedToUnprotect</a>]

---



