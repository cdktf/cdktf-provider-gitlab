# `projectExternalStatusCheck` Submodule <a name="`projectExternalStatusCheck` Submodule" id="@cdktf/provider-gitlab.projectExternalStatusCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectExternalStatusCheck <a name="ProjectExternalStatusCheck" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_external_status_check gitlab_project_external_status_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_external_status_check

projectExternalStatusCheck.ProjectExternalStatusCheck(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  external_url: str,
  name: str,
  project_id: typing.Union[int, float],
  protected_branch_ids: typing.List[typing.Union[int, float]] = None,
  shared_secret: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.externalUrl">external_url</a></code> | <code>str</code> | The URL of the external status check service. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.name">name</a></code> | <code>str</code> | The display name of the external status check service. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.projectId">project_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.protectedBranchIds">protected_branch_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | The list of IDs of protected branches to scope the rule by. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.sharedSecret">shared_secret</a></code> | <code>str</code> | The HMAC secret for the external status check. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `external_url`<sup>Required</sup> <a name="external_url" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.externalUrl"></a>

- *Type:* str

The URL of the external status check service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_external_status_check#external_url ProjectExternalStatusCheck#external_url}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.name"></a>

- *Type:* str

The display name of the external status check service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_external_status_check#name ProjectExternalStatusCheck#name}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.projectId"></a>

- *Type:* typing.Union[int, float]

The ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_external_status_check#project_id ProjectExternalStatusCheck#project_id}

---

##### `protected_branch_ids`<sup>Optional</sup> <a name="protected_branch_ids" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.protectedBranchIds"></a>

- *Type:* typing.List[typing.Union[int, float]]

The list of IDs of protected branches to scope the rule by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_external_status_check#protected_branch_ids ProjectExternalStatusCheck#protected_branch_ids}

---

##### `shared_secret`<sup>Optional</sup> <a name="shared_secret" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.sharedSecret"></a>

- *Type:* str

The HMAC secret for the external status check.

If this is set, then removed from the config, the value will get set to empty in the state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_external_status_check#shared_secret ProjectExternalStatusCheck#shared_secret}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.resetProtectedBranchIds">reset_protected_branch_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.resetSharedSecret">reset_shared_secret</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_protected_branch_ids` <a name="reset_protected_branch_ids" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.resetProtectedBranchIds"></a>

```python
def reset_protected_branch_ids() -> None
```

##### `reset_shared_secret` <a name="reset_shared_secret" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.resetSharedSecret"></a>

```python
def reset_shared_secret() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ProjectExternalStatusCheck resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import project_external_status_check

projectExternalStatusCheck.ProjectExternalStatusCheck.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import project_external_status_check

projectExternalStatusCheck.ProjectExternalStatusCheck.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import project_external_status_check

projectExternalStatusCheck.ProjectExternalStatusCheck.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import project_external_status_check

projectExternalStatusCheck.ProjectExternalStatusCheck.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ProjectExternalStatusCheck resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProjectExternalStatusCheck to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProjectExternalStatusCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_external_status_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectExternalStatusCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.hmac">hmac</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.externalUrlInput">external_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.projectIdInput">project_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.protectedBranchIdsInput">protected_branch_ids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.sharedSecretInput">shared_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.externalUrl">external_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.projectId">project_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.protectedBranchIds">protected_branch_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.sharedSecret">shared_secret</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `hmac`<sup>Required</sup> <a name="hmac" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.hmac"></a>

```python
hmac: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `external_url_input`<sup>Optional</sup> <a name="external_url_input" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.externalUrlInput"></a>

```python
external_url_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.projectIdInput"></a>

```python
project_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protected_branch_ids_input`<sup>Optional</sup> <a name="protected_branch_ids_input" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.protectedBranchIdsInput"></a>

```python
protected_branch_ids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `shared_secret_input`<sup>Optional</sup> <a name="shared_secret_input" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.sharedSecretInput"></a>

```python
shared_secret_input: str
```

- *Type:* str

---

##### `external_url`<sup>Required</sup> <a name="external_url" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.externalUrl"></a>

```python
external_url: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.projectId"></a>

```python
project_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protected_branch_ids`<sup>Required</sup> <a name="protected_branch_ids" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.protectedBranchIds"></a>

```python
protected_branch_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `shared_secret`<sup>Required</sup> <a name="shared_secret" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.sharedSecret"></a>

```python
shared_secret: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectExternalStatusCheckConfig <a name="ProjectExternalStatusCheckConfig" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_external_status_check

projectExternalStatusCheck.ProjectExternalStatusCheckConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  external_url: str,
  name: str,
  project_id: typing.Union[int, float],
  protected_branch_ids: typing.List[typing.Union[int, float]] = None,
  shared_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.externalUrl">external_url</a></code> | <code>str</code> | The URL of the external status check service. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.name">name</a></code> | <code>str</code> | The display name of the external status check service. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.projectId">project_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.protectedBranchIds">protected_branch_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | The list of IDs of protected branches to scope the rule by. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.sharedSecret">shared_secret</a></code> | <code>str</code> | The HMAC secret for the external status check. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `external_url`<sup>Required</sup> <a name="external_url" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.externalUrl"></a>

```python
external_url: str
```

- *Type:* str

The URL of the external status check service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_external_status_check#external_url ProjectExternalStatusCheck#external_url}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The display name of the external status check service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_external_status_check#name ProjectExternalStatusCheck#name}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.projectId"></a>

```python
project_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_external_status_check#project_id ProjectExternalStatusCheck#project_id}

---

##### `protected_branch_ids`<sup>Optional</sup> <a name="protected_branch_ids" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.protectedBranchIds"></a>

```python
protected_branch_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

The list of IDs of protected branches to scope the rule by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_external_status_check#protected_branch_ids ProjectExternalStatusCheck#protected_branch_ids}

---

##### `shared_secret`<sup>Optional</sup> <a name="shared_secret" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.sharedSecret"></a>

```python
shared_secret: str
```

- *Type:* str

The HMAC secret for the external status check.

If this is set, then removed from the config, the value will get set to empty in the state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_external_status_check#shared_secret ProjectExternalStatusCheck#shared_secret}

---



