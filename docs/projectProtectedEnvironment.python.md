# `projectProtectedEnvironment` Submodule <a name="`projectProtectedEnvironment` Submodule" id="@cdktf/provider-gitlab.projectProtectedEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectProtectedEnvironment <a name="ProjectProtectedEnvironment" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/project_protected_environment gitlab_project_protected_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_protected_environment

projectProtectedEnvironment.ProjectProtectedEnvironment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  environment: str,
  project: str,
  approval_rules: typing.Union[IResolvable, typing.List[ProjectProtectedEnvironmentApprovalRules]] = None,
  deploy_access_levels: typing.Union[IResolvable, typing.List[ProjectProtectedEnvironmentDeployAccessLevels]] = None,
  required_approval_count: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.environment">environment</a></code> | <code>str</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID or full path of the project which the protected environment is created against. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.approvalRules">approval_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules">ProjectProtectedEnvironmentApprovalRules</a>]]</code> | Array of approval rules to deploy, with each described by a hash. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.deployAccessLevels">deploy_access_levels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels">ProjectProtectedEnvironmentDeployAccessLevels</a>]]</code> | deploy_access_levels block. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.requiredApprovalCount">required_approval_count</a></code> | <code>typing.Union[int, float]</code> | The number of approvals required to deploy to this environment. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.environment"></a>

- *Type:* str

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/project_protected_environment#environment ProjectProtectedEnvironment#environment}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.project"></a>

- *Type:* str

The ID or full path of the project which the protected environment is created against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/project_protected_environment#project ProjectProtectedEnvironment#project}

---

##### `approval_rules`<sup>Optional</sup> <a name="approval_rules" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.approvalRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules">ProjectProtectedEnvironmentApprovalRules</a>]]

Array of approval rules to deploy, with each described by a hash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/project_protected_environment#approval_rules ProjectProtectedEnvironment#approval_rules}

---

##### `deploy_access_levels`<sup>Optional</sup> <a name="deploy_access_levels" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.deployAccessLevels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels">ProjectProtectedEnvironmentDeployAccessLevels</a>]]

deploy_access_levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/project_protected_environment#deploy_access_levels ProjectProtectedEnvironment#deploy_access_levels}

---

##### `required_approval_count`<sup>Optional</sup> <a name="required_approval_count" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.requiredApprovalCount"></a>

- *Type:* typing.Union[int, float]

The number of approvals required to deploy to this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/project_protected_environment#required_approval_count ProjectProtectedEnvironment#required_approval_count}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.putApprovalRules">put_approval_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.putDeployAccessLevels">put_deploy_access_levels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.resetApprovalRules">reset_approval_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.resetDeployAccessLevels">reset_deploy_access_levels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.resetRequiredApprovalCount">reset_required_approval_count</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_approval_rules` <a name="put_approval_rules" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.putApprovalRules"></a>

```python
def put_approval_rules(
  value: typing.Union[IResolvable, typing.List[ProjectProtectedEnvironmentApprovalRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.putApprovalRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules">ProjectProtectedEnvironmentApprovalRules</a>]]

---

##### `put_deploy_access_levels` <a name="put_deploy_access_levels" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.putDeployAccessLevels"></a>

```python
def put_deploy_access_levels(
  value: typing.Union[IResolvable, typing.List[ProjectProtectedEnvironmentDeployAccessLevels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.putDeployAccessLevels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels">ProjectProtectedEnvironmentDeployAccessLevels</a>]]

---

##### `reset_approval_rules` <a name="reset_approval_rules" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.resetApprovalRules"></a>

```python
def reset_approval_rules() -> None
```

##### `reset_deploy_access_levels` <a name="reset_deploy_access_levels" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.resetDeployAccessLevels"></a>

```python
def reset_deploy_access_levels() -> None
```

##### `reset_required_approval_count` <a name="reset_required_approval_count" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.resetRequiredApprovalCount"></a>

```python
def reset_required_approval_count() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ProjectProtectedEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import project_protected_environment

projectProtectedEnvironment.ProjectProtectedEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import project_protected_environment

projectProtectedEnvironment.ProjectProtectedEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import project_protected_environment

projectProtectedEnvironment.ProjectProtectedEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import project_protected_environment

projectProtectedEnvironment.ProjectProtectedEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ProjectProtectedEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProjectProtectedEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProjectProtectedEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/project_protected_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectProtectedEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.approvalRules">approval_rules</a></code> | <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList">ProjectProtectedEnvironmentApprovalRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.deployAccessLevels">deploy_access_levels</a></code> | <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList">ProjectProtectedEnvironmentDeployAccessLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.approvalRulesInput">approval_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules">ProjectProtectedEnvironmentApprovalRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.deployAccessLevelsInput">deploy_access_levels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels">ProjectProtectedEnvironmentDeployAccessLevels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.requiredApprovalCountInput">required_approval_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.requiredApprovalCount">required_approval_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `approval_rules`<sup>Required</sup> <a name="approval_rules" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.approvalRules"></a>

```python
approval_rules: ProjectProtectedEnvironmentApprovalRulesList
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList">ProjectProtectedEnvironmentApprovalRulesList</a>

---

##### `deploy_access_levels`<sup>Required</sup> <a name="deploy_access_levels" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.deployAccessLevels"></a>

```python
deploy_access_levels: ProjectProtectedEnvironmentDeployAccessLevelsList
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList">ProjectProtectedEnvironmentDeployAccessLevelsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `approval_rules_input`<sup>Optional</sup> <a name="approval_rules_input" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.approvalRulesInput"></a>

```python
approval_rules_input: typing.Union[IResolvable, typing.List[ProjectProtectedEnvironmentApprovalRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules">ProjectProtectedEnvironmentApprovalRules</a>]]

---

##### `deploy_access_levels_input`<sup>Optional</sup> <a name="deploy_access_levels_input" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.deployAccessLevelsInput"></a>

```python
deploy_access_levels_input: typing.Union[IResolvable, typing.List[ProjectProtectedEnvironmentDeployAccessLevels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels">ProjectProtectedEnvironmentDeployAccessLevels</a>]]

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `required_approval_count_input`<sup>Optional</sup> <a name="required_approval_count_input" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.requiredApprovalCountInput"></a>

```python
required_approval_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `required_approval_count`<sup>Required</sup> <a name="required_approval_count" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.requiredApprovalCount"></a>

```python
required_approval_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectProtectedEnvironmentApprovalRules <a name="ProjectProtectedEnvironmentApprovalRules" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_protected_environment

projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules(
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
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules.property.accessLevel">access_level</a></code> | <code>str</code> | Levels of access allowed to approve a deployment to this protected environment. Valid values are `developer`, `maintainer`. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the group allowed to approve a deployment to this protected environment. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules.property.groupInheritanceType">group_inheritance_type</a></code> | <code>typing.Union[int, float]</code> | Group inheritance allows deploy access levels to take inherited group membership into account. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules.property.requiredApprovals">required_approvals</a></code> | <code>typing.Union[int, float]</code> | The number of approval required to allow deployment to this protected environment. This is mutually exclusive with user_id. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the user allowed to approve a deployment to this protected environment. |

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Levels of access allowed to approve a deployment to this protected environment. Valid values are `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/project_protected_environment#access_level ProjectProtectedEnvironment#access_level}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the group allowed to approve a deployment to this protected environment.

The project must be shared with the group. This is mutually exclusive with user_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/project_protected_environment#group_id ProjectProtectedEnvironment#group_id}

---

##### `group_inheritance_type`<sup>Optional</sup> <a name="group_inheritance_type" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules.property.groupInheritanceType"></a>

```python
group_inheritance_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Group inheritance allows deploy access levels to take inherited group membership into account.

Valid values are `0`, `1`. `0` => Direct group membership only, `1` => All inherited groups. Default: `0`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/project_protected_environment#group_inheritance_type ProjectProtectedEnvironment#group_inheritance_type}

---

##### `required_approvals`<sup>Optional</sup> <a name="required_approvals" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules.property.requiredApprovals"></a>

```python
required_approvals: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of approval required to allow deployment to this protected environment. This is mutually exclusive with user_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/project_protected_environment#required_approvals ProjectProtectedEnvironment#required_approvals}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the user allowed to approve a deployment to this protected environment.

The user must be a member of the project. This is mutually exclusive with group_id and required_approvals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/project_protected_environment#user_id ProjectProtectedEnvironment#user_id}

---

### ProjectProtectedEnvironmentConfig <a name="ProjectProtectedEnvironmentConfig" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_protected_environment

projectProtectedEnvironment.ProjectProtectedEnvironmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  environment: str,
  project: str,
  approval_rules: typing.Union[IResolvable, typing.List[ProjectProtectedEnvironmentApprovalRules]] = None,
  deploy_access_levels: typing.Union[IResolvable, typing.List[ProjectProtectedEnvironmentDeployAccessLevels]] = None,
  required_approval_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.environment">environment</a></code> | <code>str</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.project">project</a></code> | <code>str</code> | The ID or full path of the project which the protected environment is created against. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.approvalRules">approval_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules">ProjectProtectedEnvironmentApprovalRules</a>]]</code> | Array of approval rules to deploy, with each described by a hash. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.deployAccessLevels">deploy_access_levels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels">ProjectProtectedEnvironmentDeployAccessLevels</a>]]</code> | deploy_access_levels block. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.requiredApprovalCount">required_approval_count</a></code> | <code>typing.Union[int, float]</code> | The number of approvals required to deploy to this environment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/project_protected_environment#environment ProjectProtectedEnvironment#environment}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID or full path of the project which the protected environment is created against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/project_protected_environment#project ProjectProtectedEnvironment#project}

---

##### `approval_rules`<sup>Optional</sup> <a name="approval_rules" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.approvalRules"></a>

```python
approval_rules: typing.Union[IResolvable, typing.List[ProjectProtectedEnvironmentApprovalRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules">ProjectProtectedEnvironmentApprovalRules</a>]]

Array of approval rules to deploy, with each described by a hash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/project_protected_environment#approval_rules ProjectProtectedEnvironment#approval_rules}

---

##### `deploy_access_levels`<sup>Optional</sup> <a name="deploy_access_levels" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.deployAccessLevels"></a>

```python
deploy_access_levels: typing.Union[IResolvable, typing.List[ProjectProtectedEnvironmentDeployAccessLevels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels">ProjectProtectedEnvironmentDeployAccessLevels</a>]]

deploy_access_levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/project_protected_environment#deploy_access_levels ProjectProtectedEnvironment#deploy_access_levels}

---

##### `required_approval_count`<sup>Optional</sup> <a name="required_approval_count" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.requiredApprovalCount"></a>

```python
required_approval_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of approvals required to deploy to this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/project_protected_environment#required_approval_count ProjectProtectedEnvironment#required_approval_count}

---

### ProjectProtectedEnvironmentDeployAccessLevels <a name="ProjectProtectedEnvironmentDeployAccessLevels" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_protected_environment

projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels(
  access_level: str = None,
  group_id: typing.Union[int, float] = None,
  group_inheritance_type: typing.Union[int, float] = None,
  user_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.property.accessLevel">access_level</a></code> | <code>str</code> | Levels of access required to deploy to this protected environment. Valid values are `developer`, `maintainer`. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the group allowed to deploy to this protected environment. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.property.groupInheritanceType">group_inheritance_type</a></code> | <code>typing.Union[int, float]</code> | Group inheritance allows deploy access levels to take inherited group membership into account. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the user allowed to deploy to this protected environment. |

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Levels of access required to deploy to this protected environment. Valid values are `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/project_protected_environment#access_level ProjectProtectedEnvironment#access_level}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the group allowed to deploy to this protected environment.

The project must be shared with the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/project_protected_environment#group_id ProjectProtectedEnvironment#group_id}

---

##### `group_inheritance_type`<sup>Optional</sup> <a name="group_inheritance_type" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.property.groupInheritanceType"></a>

```python
group_inheritance_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Group inheritance allows deploy access levels to take inherited group membership into account.

Valid values are `0`, `1`. `0` => Direct group membership only, `1` => All inherited groups. Default: `0`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/project_protected_environment#group_inheritance_type ProjectProtectedEnvironment#group_inheritance_type}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the user allowed to deploy to this protected environment.

The user must be a member of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/project_protected_environment#user_id ProjectProtectedEnvironment#user_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectProtectedEnvironmentApprovalRulesList <a name="ProjectProtectedEnvironmentApprovalRulesList" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_protected_environment

projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProjectProtectedEnvironmentApprovalRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules">ProjectProtectedEnvironmentApprovalRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ProjectProtectedEnvironmentApprovalRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules">ProjectProtectedEnvironmentApprovalRules</a>]]

---


### ProjectProtectedEnvironmentApprovalRulesOutputReference <a name="ProjectProtectedEnvironmentApprovalRulesOutputReference" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_protected_environment

projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resetGroupInheritanceType">reset_group_inheritance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resetRequiredApprovals">reset_required_approvals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_level` <a name="reset_access_level" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_group_id` <a name="reset_group_id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_group_inheritance_type` <a name="reset_group_inheritance_type" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resetGroupInheritanceType"></a>

```python
def reset_group_inheritance_type() -> None
```

##### `reset_required_approvals` <a name="reset_required_approvals" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resetRequiredApprovals"></a>

```python
def reset_required_approvals() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.resetUserId"></a>

```python
def reset_user_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.accessLevelDescription">access_level_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.groupIdInput">group_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.groupInheritanceTypeInput">group_inheritance_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.requiredApprovalsInput">required_approvals_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.userIdInput">user_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.groupInheritanceType">group_inheritance_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.requiredApprovals">required_approvals</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules">ProjectProtectedEnvironmentApprovalRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_level_description`<sup>Required</sup> <a name="access_level_description" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.accessLevelDescription"></a>

```python
access_level_description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.groupIdInput"></a>

```python
group_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_inheritance_type_input`<sup>Optional</sup> <a name="group_inheritance_type_input" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.groupInheritanceTypeInput"></a>

```python
group_inheritance_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `required_approvals_input`<sup>Optional</sup> <a name="required_approvals_input" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.requiredApprovalsInput"></a>

```python
required_approvals_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.userIdInput"></a>

```python
user_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_inheritance_type`<sup>Required</sup> <a name="group_inheritance_type" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.groupInheritanceType"></a>

```python
group_inheritance_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `required_approvals`<sup>Required</sup> <a name="required_approvals" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.requiredApprovals"></a>

```python
required_approvals: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ProjectProtectedEnvironmentApprovalRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentApprovalRules">ProjectProtectedEnvironmentApprovalRules</a>]

---


### ProjectProtectedEnvironmentDeployAccessLevelsList <a name="ProjectProtectedEnvironmentDeployAccessLevelsList" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_protected_environment

projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProjectProtectedEnvironmentDeployAccessLevelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels">ProjectProtectedEnvironmentDeployAccessLevels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ProjectProtectedEnvironmentDeployAccessLevels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels">ProjectProtectedEnvironmentDeployAccessLevels</a>]]

---


### ProjectProtectedEnvironmentDeployAccessLevelsOutputReference <a name="ProjectProtectedEnvironmentDeployAccessLevelsOutputReference" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_protected_environment

projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resetGroupInheritanceType">reset_group_inheritance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_level` <a name="reset_access_level" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_group_id` <a name="reset_group_id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_group_inheritance_type` <a name="reset_group_inheritance_type" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resetGroupInheritanceType"></a>

```python
def reset_group_inheritance_type() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resetUserId"></a>

```python
def reset_user_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevelDescription">access_level_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupIdInput">group_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupInheritanceTypeInput">group_inheritance_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.userIdInput">user_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupInheritanceType">group_inheritance_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels">ProjectProtectedEnvironmentDeployAccessLevels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_level_description`<sup>Required</sup> <a name="access_level_description" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevelDescription"></a>

```python
access_level_description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupIdInput"></a>

```python
group_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_inheritance_type_input`<sup>Optional</sup> <a name="group_inheritance_type_input" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupInheritanceTypeInput"></a>

```python
group_inheritance_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.userIdInput"></a>

```python
user_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_inheritance_type`<sup>Required</sup> <a name="group_inheritance_type" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupInheritanceType"></a>

```python
group_inheritance_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ProjectProtectedEnvironmentDeployAccessLevels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels">ProjectProtectedEnvironmentDeployAccessLevels</a>]

---



