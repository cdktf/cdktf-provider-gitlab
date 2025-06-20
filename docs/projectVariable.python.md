# `projectVariable` Submodule <a name="`projectVariable` Submodule" id="@cdktf/provider-gitlab.projectVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectVariable <a name="ProjectVariable" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_variable gitlab_project_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_variable

projectVariable.ProjectVariable(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key: str,
  project: str,
  value: str,
  description: str = None,
  environment_scope: str = None,
  hidden: typing.Union[bool, IResolvable] = None,
  masked: typing.Union[bool, IResolvable] = None,
  protected: typing.Union[bool, IResolvable] = None,
  raw: typing.Union[bool, IResolvable] = None,
  variable_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.key">key</a></code> | <code>str</code> | The name of the variable. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.project">project</a></code> | <code>str</code> | The name or id of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.value">value</a></code> | <code>str</code> | The value of the variable. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the variable. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.environmentScope">environment_scope</a></code> | <code>str</code> | The environment scope of the variable. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.hidden">hidden</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to `true`, the value of the variable will be hidden in the CI/CD User Interface. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.masked">masked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to `true`, the value of the variable will be masked in job logs. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.protected">protected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to `true`, the variable will be passed only to pipelines running on protected branches and tags. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.raw">raw</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the variable is treated as a raw string. When true, variables in the value are not expanded. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.variableType">variable_type</a></code> | <code>str</code> | The type of a variable. Valid values are: `env_var`, `file`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.key"></a>

- *Type:* str

The name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_variable#key ProjectVariable#key}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.project"></a>

- *Type:* str

The name or id of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_variable#project ProjectVariable#project}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.value"></a>

- *Type:* str

The value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_variable#value ProjectVariable#value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.description"></a>

- *Type:* str

The description of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_variable#description ProjectVariable#description}

---

##### `environment_scope`<sup>Optional</sup> <a name="environment_scope" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.environmentScope"></a>

- *Type:* str

The environment scope of the variable.

Defaults to all environment (`*`). Note that in Community Editions of Gitlab, values other than `*` will cause inconsistent plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_variable#environment_scope ProjectVariable#environment_scope}

---

##### `hidden`<sup>Optional</sup> <a name="hidden" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.hidden"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to `true`, the value of the variable will be hidden in the CI/CD User Interface.

The value must meet the [hidden requirements](https://docs.gitlab.com/ci/variables/#hide-a-cicd-variable).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_variable#hidden ProjectVariable#hidden}

---

##### `masked`<sup>Optional</sup> <a name="masked" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.masked"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to `true`, the value of the variable will be masked in job logs.

The value must meet the [masking requirements](https://docs.gitlab.com/ee/ci/variables/#mask-a-cicd-variable).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_variable#masked ProjectVariable#masked}

---

##### `protected`<sup>Optional</sup> <a name="protected" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.protected"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to `true`, the variable will be passed only to pipelines running on protected branches and tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_variable#protected ProjectVariable#protected}

---

##### `raw`<sup>Optional</sup> <a name="raw" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.raw"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the variable is treated as a raw string. When true, variables in the value are not expanded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_variable#raw ProjectVariable#raw}

---

##### `variable_type`<sup>Optional</sup> <a name="variable_type" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.variableType"></a>

- *Type:* str

The type of a variable. Valid values are: `env_var`, `file`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_variable#variable_type ProjectVariable#variable_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetEnvironmentScope">reset_environment_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetHidden">reset_hidden</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetMasked">reset_masked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetProtected">reset_protected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetRaw">reset_raw</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetVariableType">reset_variable_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_environment_scope` <a name="reset_environment_scope" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetEnvironmentScope"></a>

```python
def reset_environment_scope() -> None
```

##### `reset_hidden` <a name="reset_hidden" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetHidden"></a>

```python
def reset_hidden() -> None
```

##### `reset_masked` <a name="reset_masked" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetMasked"></a>

```python
def reset_masked() -> None
```

##### `reset_protected` <a name="reset_protected" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetProtected"></a>

```python
def reset_protected() -> None
```

##### `reset_raw` <a name="reset_raw" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetRaw"></a>

```python
def reset_raw() -> None
```

##### `reset_variable_type` <a name="reset_variable_type" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetVariableType"></a>

```python
def reset_variable_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ProjectVariable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import project_variable

projectVariable.ProjectVariable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import project_variable

projectVariable.ProjectVariable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import project_variable

projectVariable.ProjectVariable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import project_variable

projectVariable.ProjectVariable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ProjectVariable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProjectVariable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProjectVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_variable#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.environmentScopeInput">environment_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.hiddenInput">hidden_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.maskedInput">masked_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.protectedInput">protected_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.rawInput">raw_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.variableTypeInput">variable_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.environmentScope">environment_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.hidden">hidden</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.masked">masked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.protected">protected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.raw">raw</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.variableType">variable_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `environment_scope_input`<sup>Optional</sup> <a name="environment_scope_input" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.environmentScopeInput"></a>

```python
environment_scope_input: str
```

- *Type:* str

---

##### `hidden_input`<sup>Optional</sup> <a name="hidden_input" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.hiddenInput"></a>

```python
hidden_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `masked_input`<sup>Optional</sup> <a name="masked_input" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.maskedInput"></a>

```python
masked_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `protected_input`<sup>Optional</sup> <a name="protected_input" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.protectedInput"></a>

```python
protected_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `raw_input`<sup>Optional</sup> <a name="raw_input" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.rawInput"></a>

```python
raw_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `variable_type_input`<sup>Optional</sup> <a name="variable_type_input" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.variableTypeInput"></a>

```python
variable_type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `environment_scope`<sup>Required</sup> <a name="environment_scope" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.environmentScope"></a>

```python
environment_scope: str
```

- *Type:* str

---

##### `hidden`<sup>Required</sup> <a name="hidden" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.hidden"></a>

```python
hidden: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `masked`<sup>Required</sup> <a name="masked" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.masked"></a>

```python
masked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `protected`<sup>Required</sup> <a name="protected" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.protected"></a>

```python
protected: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `raw`<sup>Required</sup> <a name="raw" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.raw"></a>

```python
raw: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `variable_type`<sup>Required</sup> <a name="variable_type" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.variableType"></a>

```python
variable_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectVariableConfig <a name="ProjectVariableConfig" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_variable

projectVariable.ProjectVariableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key: str,
  project: str,
  value: str,
  description: str = None,
  environment_scope: str = None,
  hidden: typing.Union[bool, IResolvable] = None,
  masked: typing.Union[bool, IResolvable] = None,
  protected: typing.Union[bool, IResolvable] = None,
  raw: typing.Union[bool, IResolvable] = None,
  variable_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.key">key</a></code> | <code>str</code> | The name of the variable. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.project">project</a></code> | <code>str</code> | The name or id of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.value">value</a></code> | <code>str</code> | The value of the variable. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.description">description</a></code> | <code>str</code> | The description of the variable. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.environmentScope">environment_scope</a></code> | <code>str</code> | The environment scope of the variable. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.hidden">hidden</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to `true`, the value of the variable will be hidden in the CI/CD User Interface. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.masked">masked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to `true`, the value of the variable will be masked in job logs. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.protected">protected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to `true`, the variable will be passed only to pipelines running on protected branches and tags. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.raw">raw</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the variable is treated as a raw string. When true, variables in the value are not expanded. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.variableType">variable_type</a></code> | <code>str</code> | The type of a variable. Valid values are: `env_var`, `file`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.key"></a>

```python
key: str
```

- *Type:* str

The name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_variable#key ProjectVariable#key}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The name or id of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_variable#project ProjectVariable#project}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_variable#value ProjectVariable#value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_variable#description ProjectVariable#description}

---

##### `environment_scope`<sup>Optional</sup> <a name="environment_scope" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.environmentScope"></a>

```python
environment_scope: str
```

- *Type:* str

The environment scope of the variable.

Defaults to all environment (`*`). Note that in Community Editions of Gitlab, values other than `*` will cause inconsistent plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_variable#environment_scope ProjectVariable#environment_scope}

---

##### `hidden`<sup>Optional</sup> <a name="hidden" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.hidden"></a>

```python
hidden: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to `true`, the value of the variable will be hidden in the CI/CD User Interface.

The value must meet the [hidden requirements](https://docs.gitlab.com/ci/variables/#hide-a-cicd-variable).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_variable#hidden ProjectVariable#hidden}

---

##### `masked`<sup>Optional</sup> <a name="masked" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.masked"></a>

```python
masked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to `true`, the value of the variable will be masked in job logs.

The value must meet the [masking requirements](https://docs.gitlab.com/ee/ci/variables/#mask-a-cicd-variable).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_variable#masked ProjectVariable#masked}

---

##### `protected`<sup>Optional</sup> <a name="protected" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.protected"></a>

```python
protected: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to `true`, the variable will be passed only to pipelines running on protected branches and tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_variable#protected ProjectVariable#protected}

---

##### `raw`<sup>Optional</sup> <a name="raw" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.raw"></a>

```python
raw: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the variable is treated as a raw string. When true, variables in the value are not expanded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_variable#raw ProjectVariable#raw}

---

##### `variable_type`<sup>Optional</sup> <a name="variable_type" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.variableType"></a>

```python
variable_type: str
```

- *Type:* str

The type of a variable. Valid values are: `env_var`, `file`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_variable#variable_type ProjectVariable#variable_type}

---



