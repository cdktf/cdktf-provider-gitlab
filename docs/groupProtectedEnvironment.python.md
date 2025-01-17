# `groupProtectedEnvironment` Submodule <a name="`groupProtectedEnvironment` Submodule" id="@cdktf/provider-gitlab.groupProtectedEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupProtectedEnvironment <a name="GroupProtectedEnvironment" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/group_protected_environment gitlab_group_protected_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_protected_environment

groupProtectedEnvironment.GroupProtectedEnvironment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  deploy_access_levels: typing.Union[IResolvable, typing.List[GroupProtectedEnvironmentDeployAccessLevels]],
  environment: str,
  group: str,
  approval_rules: typing.Union[IResolvable, typing.List[GroupProtectedEnvironmentApprovalRules]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.deployAccessLevels">deploy_access_levels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels">GroupProtectedEnvironmentDeployAccessLevels</a>]]</code> | Array of access levels allowed to deploy, with each described by a hash. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.environment">environment</a></code> | <code>str</code> | The deployment tier of the environment.  Valid values are `production`, `staging`, `testing`, `development`, `other`. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.group">group</a></code> | <code>str</code> | The ID or full path of the group which the protected environment is created against. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.approvalRules">approval_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules">GroupProtectedEnvironmentApprovalRules</a>]]</code> | Array of approval rules to deploy, with each described by a hash. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `deploy_access_levels`<sup>Required</sup> <a name="deploy_access_levels" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.deployAccessLevels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels">GroupProtectedEnvironmentDeployAccessLevels</a>]]

Array of access levels allowed to deploy, with each described by a hash.

Elements in the `deploy_access_levels` should be one of `user_id`, `group_id` or `access_level`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/group_protected_environment#deploy_access_levels GroupProtectedEnvironment#deploy_access_levels}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.environment"></a>

- *Type:* str

The deployment tier of the environment.  Valid values are `production`, `staging`, `testing`, `development`, `other`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/group_protected_environment#environment GroupProtectedEnvironment#environment}

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.group"></a>

- *Type:* str

The ID or full path of the group which the protected environment is created against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/group_protected_environment#group GroupProtectedEnvironment#group}

---

##### `approval_rules`<sup>Optional</sup> <a name="approval_rules" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.approvalRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules">GroupProtectedEnvironmentApprovalRules</a>]]

Array of approval rules to deploy, with each described by a hash.

Elements in the `approval_rules` should be one of `user_id`, `group_id` or `access_level`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/group_protected_environment#approval_rules GroupProtectedEnvironment#approval_rules}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.putApprovalRules">put_approval_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.putDeployAccessLevels">put_deploy_access_levels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.resetApprovalRules">reset_approval_rules</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_approval_rules` <a name="put_approval_rules" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.putApprovalRules"></a>

```python
def put_approval_rules(
  value: typing.Union[IResolvable, typing.List[GroupProtectedEnvironmentApprovalRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.putApprovalRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules">GroupProtectedEnvironmentApprovalRules</a>]]

---

##### `put_deploy_access_levels` <a name="put_deploy_access_levels" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.putDeployAccessLevels"></a>

```python
def put_deploy_access_levels(
  value: typing.Union[IResolvable, typing.List[GroupProtectedEnvironmentDeployAccessLevels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.putDeployAccessLevels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels">GroupProtectedEnvironmentDeployAccessLevels</a>]]

---

##### `reset_approval_rules` <a name="reset_approval_rules" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.resetApprovalRules"></a>

```python
def reset_approval_rules() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GroupProtectedEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import group_protected_environment

groupProtectedEnvironment.GroupProtectedEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import group_protected_environment

groupProtectedEnvironment.GroupProtectedEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import group_protected_environment

groupProtectedEnvironment.GroupProtectedEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import group_protected_environment

groupProtectedEnvironment.GroupProtectedEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GroupProtectedEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GroupProtectedEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GroupProtectedEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/group_protected_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GroupProtectedEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.approvalRules">approval_rules</a></code> | <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList">GroupProtectedEnvironmentApprovalRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.deployAccessLevels">deploy_access_levels</a></code> | <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList">GroupProtectedEnvironmentDeployAccessLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.approvalRulesInput">approval_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules">GroupProtectedEnvironmentApprovalRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.deployAccessLevelsInput">deploy_access_levels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels">GroupProtectedEnvironmentDeployAccessLevels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.group">group</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `approval_rules`<sup>Required</sup> <a name="approval_rules" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.approvalRules"></a>

```python
approval_rules: GroupProtectedEnvironmentApprovalRulesList
```

- *Type:* <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList">GroupProtectedEnvironmentApprovalRulesList</a>

---

##### `deploy_access_levels`<sup>Required</sup> <a name="deploy_access_levels" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.deployAccessLevels"></a>

```python
deploy_access_levels: GroupProtectedEnvironmentDeployAccessLevelsList
```

- *Type:* <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList">GroupProtectedEnvironmentDeployAccessLevelsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `approval_rules_input`<sup>Optional</sup> <a name="approval_rules_input" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.approvalRulesInput"></a>

```python
approval_rules_input: typing.Union[IResolvable, typing.List[GroupProtectedEnvironmentApprovalRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules">GroupProtectedEnvironmentApprovalRules</a>]]

---

##### `deploy_access_levels_input`<sup>Optional</sup> <a name="deploy_access_levels_input" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.deployAccessLevelsInput"></a>

```python
deploy_access_levels_input: typing.Union[IResolvable, typing.List[GroupProtectedEnvironmentDeployAccessLevels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels">GroupProtectedEnvironmentDeployAccessLevels</a>]]

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.group"></a>

```python
group: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GroupProtectedEnvironmentApprovalRules <a name="GroupProtectedEnvironmentApprovalRules" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_protected_environment

groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules(
  access_level: str = None,
  group_id: typing.Union[int, float] = None,
  group_inheritance_type: typing.Union[int, float] = None,
  required_approvals: typing.Union[int, float] = None,
  user_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.accessLevel">access_level</a></code> | <code>str</code> | Levels of access allowed to approve a deployment to this protected environment. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the group allowed to approve a deployment to this protected environment. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.groupInheritanceType">group_inheritance_type</a></code> | <code>typing.Union[int, float]</code> | Group inheritance allows access rules to take inherited group membership into account. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.requiredApprovals">required_approvals</a></code> | <code>typing.Union[int, float]</code> | The number of approval required to allow deployment to this protected environment. This is mutually exclusive with user_id. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the user allowed to approve a deployment to this protected environment. |

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Levels of access allowed to approve a deployment to this protected environment.

Mutually exclusive with `user_id` and `group_id`. Valid values are `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/group_protected_environment#access_level GroupProtectedEnvironment#access_level}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the group allowed to approve a deployment to this protected environment.

TThe group must be a sub-group under the given group. Mutually exclusive with `access_level` and `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/group_protected_environment#group_id GroupProtectedEnvironment#group_id}

---

##### `group_inheritance_type`<sup>Optional</sup> <a name="group_inheritance_type" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.groupInheritanceType"></a>

```python
group_inheritance_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Group inheritance allows access rules to take inherited group membership into account.

Valid values are `0`, `1`. `0` => Direct group membership only, `1` => All inherited groups. Default: `0`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/group_protected_environment#group_inheritance_type GroupProtectedEnvironment#group_inheritance_type}

---

##### `required_approvals`<sup>Optional</sup> <a name="required_approvals" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.requiredApprovals"></a>

```python
required_approvals: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of approval required to allow deployment to this protected environment. This is mutually exclusive with user_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/group_protected_environment#required_approvals GroupProtectedEnvironment#required_approvals}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the user allowed to approve a deployment to this protected environment.

The user must be a member of the group with Maintainer role or higher. Mutually exclusive with `access_level` and `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/group_protected_environment#user_id GroupProtectedEnvironment#user_id}

---

### GroupProtectedEnvironmentConfig <a name="GroupProtectedEnvironmentConfig" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_protected_environment

groupProtectedEnvironment.GroupProtectedEnvironmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  deploy_access_levels: typing.Union[IResolvable, typing.List[GroupProtectedEnvironmentDeployAccessLevels]],
  environment: str,
  group: str,
  approval_rules: typing.Union[IResolvable, typing.List[GroupProtectedEnvironmentApprovalRules]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.deployAccessLevels">deploy_access_levels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels">GroupProtectedEnvironmentDeployAccessLevels</a>]]</code> | Array of access levels allowed to deploy, with each described by a hash. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.environment">environment</a></code> | <code>str</code> | The deployment tier of the environment.  Valid values are `production`, `staging`, `testing`, `development`, `other`. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.group">group</a></code> | <code>str</code> | The ID or full path of the group which the protected environment is created against. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.approvalRules">approval_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules">GroupProtectedEnvironmentApprovalRules</a>]]</code> | Array of approval rules to deploy, with each described by a hash. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `deploy_access_levels`<sup>Required</sup> <a name="deploy_access_levels" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.deployAccessLevels"></a>

```python
deploy_access_levels: typing.Union[IResolvable, typing.List[GroupProtectedEnvironmentDeployAccessLevels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels">GroupProtectedEnvironmentDeployAccessLevels</a>]]

Array of access levels allowed to deploy, with each described by a hash.

Elements in the `deploy_access_levels` should be one of `user_id`, `group_id` or `access_level`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/group_protected_environment#deploy_access_levels GroupProtectedEnvironment#deploy_access_levels}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

The deployment tier of the environment.  Valid values are `production`, `staging`, `testing`, `development`, `other`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/group_protected_environment#environment GroupProtectedEnvironment#environment}

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.group"></a>

```python
group: str
```

- *Type:* str

The ID or full path of the group which the protected environment is created against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/group_protected_environment#group GroupProtectedEnvironment#group}

---

##### `approval_rules`<sup>Optional</sup> <a name="approval_rules" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.approvalRules"></a>

```python
approval_rules: typing.Union[IResolvable, typing.List[GroupProtectedEnvironmentApprovalRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules">GroupProtectedEnvironmentApprovalRules</a>]]

Array of approval rules to deploy, with each described by a hash.

Elements in the `approval_rules` should be one of `user_id`, `group_id` or `access_level`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/group_protected_environment#approval_rules GroupProtectedEnvironment#approval_rules}

---

### GroupProtectedEnvironmentDeployAccessLevels <a name="GroupProtectedEnvironmentDeployAccessLevels" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_protected_environment

groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels(
  access_level: str = None,
  group_id: typing.Union[int, float] = None,
  group_inheritance_type: typing.Union[int, float] = None,
  user_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.property.accessLevel">access_level</a></code> | <code>str</code> | Levels of access required to deploy to this protected environment. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the group allowed to deploy to this protected environment. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.property.groupInheritanceType">group_inheritance_type</a></code> | <code>typing.Union[int, float]</code> | Group inheritance allows deploy access levels to take inherited group membership into account. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the user allowed to deploy to this protected environment. |

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Levels of access required to deploy to this protected environment.

Mutually exclusive with `user_id` and `group_id`. Valid values are `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/group_protected_environment#access_level GroupProtectedEnvironment#access_level}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the group allowed to deploy to this protected environment.

The group must be a sub-group under the given group. Mutually exclusive with `access_level` and `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/group_protected_environment#group_id GroupProtectedEnvironment#group_id}

---

##### `group_inheritance_type`<sup>Optional</sup> <a name="group_inheritance_type" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.property.groupInheritanceType"></a>

```python
group_inheritance_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Group inheritance allows deploy access levels to take inherited group membership into account.

Valid values are `0`, `1`. `0` => Direct group membership only, `1` => All inherited groups. Default: `0`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/group_protected_environment#group_inheritance_type GroupProtectedEnvironment#group_inheritance_type}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the user allowed to deploy to this protected environment.

The user must be a member of the group with Maintainer role or higher. Mutually exclusive with `access_level` and `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/group_protected_environment#user_id GroupProtectedEnvironment#user_id}

---

## Classes <a name="Classes" id="Classes"></a>

### GroupProtectedEnvironmentApprovalRulesList <a name="GroupProtectedEnvironmentApprovalRulesList" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_protected_environment

groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GroupProtectedEnvironmentApprovalRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules">GroupProtectedEnvironmentApprovalRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GroupProtectedEnvironmentApprovalRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules">GroupProtectedEnvironmentApprovalRules</a>]]

---


### GroupProtectedEnvironmentApprovalRulesOutputReference <a name="GroupProtectedEnvironmentApprovalRulesOutputReference" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_protected_environment

groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetGroupInheritanceType">reset_group_inheritance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetRequiredApprovals">reset_required_approvals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_level` <a name="reset_access_level" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_group_id` <a name="reset_group_id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_group_inheritance_type` <a name="reset_group_inheritance_type" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetGroupInheritanceType"></a>

```python
def reset_group_inheritance_type() -> None
```

##### `reset_required_approvals` <a name="reset_required_approvals" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetRequiredApprovals"></a>

```python
def reset_required_approvals() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetUserId"></a>

```python
def reset_user_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.accessLevelDescription">access_level_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.groupIdInput">group_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.groupInheritanceTypeInput">group_inheritance_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.requiredApprovalsInput">required_approvals_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.userIdInput">user_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.groupInheritanceType">group_inheritance_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.requiredApprovals">required_approvals</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules">GroupProtectedEnvironmentApprovalRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_level_description`<sup>Required</sup> <a name="access_level_description" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.accessLevelDescription"></a>

```python
access_level_description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.groupIdInput"></a>

```python
group_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_inheritance_type_input`<sup>Optional</sup> <a name="group_inheritance_type_input" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.groupInheritanceTypeInput"></a>

```python
group_inheritance_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `required_approvals_input`<sup>Optional</sup> <a name="required_approvals_input" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.requiredApprovalsInput"></a>

```python
required_approvals_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.userIdInput"></a>

```python
user_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_inheritance_type`<sup>Required</sup> <a name="group_inheritance_type" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.groupInheritanceType"></a>

```python
group_inheritance_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `required_approvals`<sup>Required</sup> <a name="required_approvals" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.requiredApprovals"></a>

```python
required_approvals: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GroupProtectedEnvironmentApprovalRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules">GroupProtectedEnvironmentApprovalRules</a>]

---


### GroupProtectedEnvironmentDeployAccessLevelsList <a name="GroupProtectedEnvironmentDeployAccessLevelsList" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_protected_environment

groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GroupProtectedEnvironmentDeployAccessLevelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels">GroupProtectedEnvironmentDeployAccessLevels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GroupProtectedEnvironmentDeployAccessLevels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels">GroupProtectedEnvironmentDeployAccessLevels</a>]]

---


### GroupProtectedEnvironmentDeployAccessLevelsOutputReference <a name="GroupProtectedEnvironmentDeployAccessLevelsOutputReference" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_protected_environment

groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resetGroupInheritanceType">reset_group_inheritance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_level` <a name="reset_access_level" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_group_id` <a name="reset_group_id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_group_inheritance_type` <a name="reset_group_inheritance_type" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resetGroupInheritanceType"></a>

```python
def reset_group_inheritance_type() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resetUserId"></a>

```python
def reset_user_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevelDescription">access_level_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupIdInput">group_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupInheritanceTypeInput">group_inheritance_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.userIdInput">user_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupInheritanceType">group_inheritance_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels">GroupProtectedEnvironmentDeployAccessLevels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_level_description`<sup>Required</sup> <a name="access_level_description" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevelDescription"></a>

```python
access_level_description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupIdInput"></a>

```python
group_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_inheritance_type_input`<sup>Optional</sup> <a name="group_inheritance_type_input" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupInheritanceTypeInput"></a>

```python
group_inheritance_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.userIdInput"></a>

```python
user_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_inheritance_type`<sup>Required</sup> <a name="group_inheritance_type" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupInheritanceType"></a>

```python
group_inheritance_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GroupProtectedEnvironmentDeployAccessLevels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels">GroupProtectedEnvironmentDeployAccessLevels</a>]

---



