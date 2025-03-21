# `dataGitlabProjectProtectedBranches` Submodule <a name="`dataGitlabProjectProtectedBranches` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectProtectedBranches <a name="DataGitlabProjectProtectedBranches" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/project_protected_branches gitlab_project_protected_branches}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_branches

dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  protected_branches: typing.Union[IResolvable, typing.List[DataGitlabProjectProtectedBranchesProtectedBranches]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The integer or path with namespace that uniquely identifies the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.protectedBranches">protected_branches</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches">DataGitlabProjectProtectedBranchesProtectedBranches</a>]]</code> | protected_branches block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.projectId"></a>

- *Type:* str

The integer or path with namespace that uniquely identifies the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/project_protected_branches#project_id DataGitlabProjectProtectedBranches#project_id}

---

##### `protected_branches`<sup>Optional</sup> <a name="protected_branches" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.Initializer.parameter.protectedBranches"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches">DataGitlabProjectProtectedBranchesProtectedBranches</a>]]

protected_branches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/project_protected_branches#protected_branches DataGitlabProjectProtectedBranches#protected_branches}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.putProtectedBranches">put_protected_branches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.resetProtectedBranches">reset_protected_branches</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_protected_branches` <a name="put_protected_branches" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.putProtectedBranches"></a>

```python
def put_protected_branches(
  value: typing.Union[IResolvable, typing.List[DataGitlabProjectProtectedBranchesProtectedBranches]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.putProtectedBranches.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches">DataGitlabProjectProtectedBranchesProtectedBranches</a>]]

---

##### `reset_protected_branches` <a name="reset_protected_branches" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.resetProtectedBranches"></a>

```python
def reset_protected_branches() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGitlabProjectProtectedBranches resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_branches

dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_branches

dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_branches

dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_branches

dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGitlabProjectProtectedBranches resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGitlabProjectProtectedBranches to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGitlabProjectProtectedBranches that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/project_protected_branches#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProjectProtectedBranches to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.protectedBranches">protected_branches</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList">DataGitlabProjectProtectedBranchesProtectedBranchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.protectedBranchesInput">protected_branches_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches">DataGitlabProjectProtectedBranchesProtectedBranches</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protected_branches`<sup>Required</sup> <a name="protected_branches" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.protectedBranches"></a>

```python
protected_branches: DataGitlabProjectProtectedBranchesProtectedBranchesList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList">DataGitlabProjectProtectedBranchesProtectedBranchesList</a>

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `protected_branches_input`<sup>Optional</sup> <a name="protected_branches_input" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.protectedBranchesInput"></a>

```python
protected_branches_input: typing.Union[IResolvable, typing.List[DataGitlabProjectProtectedBranchesProtectedBranches]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches">DataGitlabProjectProtectedBranchesProtectedBranches</a>]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranches.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectProtectedBranchesConfig <a name="DataGitlabProjectProtectedBranchesConfig" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_branches

dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  protected_branches: typing.Union[IResolvable, typing.List[DataGitlabProjectProtectedBranchesProtectedBranches]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.projectId">project_id</a></code> | <code>str</code> | The integer or path with namespace that uniquely identifies the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.protectedBranches">protected_branches</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches">DataGitlabProjectProtectedBranchesProtectedBranches</a>]]</code> | protected_branches block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The integer or path with namespace that uniquely identifies the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/project_protected_branches#project_id DataGitlabProjectProtectedBranches#project_id}

---

##### `protected_branches`<sup>Optional</sup> <a name="protected_branches" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesConfig.property.protectedBranches"></a>

```python
protected_branches: typing.Union[IResolvable, typing.List[DataGitlabProjectProtectedBranchesProtectedBranches]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches">DataGitlabProjectProtectedBranchesProtectedBranches</a>]]

protected_branches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/project_protected_branches#protected_branches DataGitlabProjectProtectedBranches#protected_branches}

---

### DataGitlabProjectProtectedBranchesProtectedBranches <a name="DataGitlabProjectProtectedBranchesProtectedBranches" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_branches

dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches(
  merge_access_levels: typing.Union[IResolvable, typing.List[DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels]] = None,
  push_access_levels: typing.Union[IResolvable, typing.List[DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches.property.mergeAccessLevels">merge_access_levels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels</a>]]</code> | merge_access_levels block. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches.property.pushAccessLevels">push_access_levels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels</a>]]</code> | push_access_levels block. |

---

##### `merge_access_levels`<sup>Optional</sup> <a name="merge_access_levels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches.property.mergeAccessLevels"></a>

```python
merge_access_levels: typing.Union[IResolvable, typing.List[DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels</a>]]

merge_access_levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/project_protected_branches#merge_access_levels DataGitlabProjectProtectedBranches#merge_access_levels}

---

##### `push_access_levels`<sup>Optional</sup> <a name="push_access_levels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches.property.pushAccessLevels"></a>

```python
push_access_levels: typing.Union[IResolvable, typing.List[DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels</a>]]

push_access_levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/project_protected_branches#push_access_levels DataGitlabProjectProtectedBranches#push_access_levels}

---

### DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels <a name="DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_branches

dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels(
  group_id: typing.Union[int, float] = None,
  user_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`. |

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/project_protected_branches#group_id DataGitlabProjectProtectedBranches#group_id}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/project_protected_branches#user_id DataGitlabProjectProtectedBranches#user_id}

---

### DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels <a name="DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_branches

dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels(
  deploy_key_id: typing.Union[int, float] = None,
  group_id: typing.Union[int, float] = None,
  user_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels.property.deployKeyId">deploy_key_id</a></code> | <code>typing.Union[int, float]</code> | The ID of a GitLab deploy key allowed to perform the relevant action. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `deploy_key_id` and `user_id`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `deploy_key_id` and `group_id`. |

---

##### `deploy_key_id`<sup>Optional</sup> <a name="deploy_key_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels.property.deployKeyId"></a>

```python
deploy_key_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of a GitLab deploy key allowed to perform the relevant action.

Mutually exclusive with `group_id` and `user_id`. This field is read-only until Gitlab 17.5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/project_protected_branches#deploy_key_id DataGitlabProjectProtectedBranches#deploy_key_id}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `deploy_key_id` and `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/project_protected_branches#group_id DataGitlabProjectProtectedBranches#group_id}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `deploy_key_id` and `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/project_protected_branches#user_id DataGitlabProjectProtectedBranches#user_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectProtectedBranchesProtectedBranchesList <a name="DataGitlabProjectProtectedBranchesProtectedBranchesList" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_branches

dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches">DataGitlabProjectProtectedBranchesProtectedBranches</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataGitlabProjectProtectedBranchesProtectedBranches]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches">DataGitlabProjectProtectedBranchesProtectedBranches</a>]]

---


### DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList <a name="DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_branches

dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels</a>]]

---


### DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference <a name="DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_branches

dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_id` <a name="reset_group_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.resetUserId"></a>

```python
def reset_user_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.accessLevelDescription">access_level_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.groupIdInput">group_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.userIdInput">user_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `access_level_description`<sup>Required</sup> <a name="access_level_description" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.accessLevelDescription"></a>

```python
access_level_description: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.groupIdInput"></a>

```python
group_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.userIdInput"></a>

```python
user_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels</a>]

---


### DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference <a name="DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_branches

dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.putMergeAccessLevels">put_merge_access_levels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.putPushAccessLevels">put_push_access_levels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.resetMergeAccessLevels">reset_merge_access_levels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.resetPushAccessLevels">reset_push_access_levels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_merge_access_levels` <a name="put_merge_access_levels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.putMergeAccessLevels"></a>

```python
def put_merge_access_levels(
  value: typing.Union[IResolvable, typing.List[DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.putMergeAccessLevels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels</a>]]

---

##### `put_push_access_levels` <a name="put_push_access_levels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.putPushAccessLevels"></a>

```python
def put_push_access_levels(
  value: typing.Union[IResolvable, typing.List[DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.putPushAccessLevels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels</a>]]

---

##### `reset_merge_access_levels` <a name="reset_merge_access_levels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.resetMergeAccessLevels"></a>

```python
def reset_merge_access_levels() -> None
```

##### `reset_push_access_levels` <a name="reset_push_access_levels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.resetPushAccessLevels"></a>

```python
def reset_push_access_levels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.allowForcePush">allow_force_push</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.codeOwnerApprovalRequired">code_owner_approval_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.mergeAccessLevels">merge_access_levels</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList">DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.pushAccessLevels">push_access_levels</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList">DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.mergeAccessLevelsInput">merge_access_levels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.pushAccessLevelsInput">push_access_levels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches">DataGitlabProjectProtectedBranchesProtectedBranches</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_force_push`<sup>Required</sup> <a name="allow_force_push" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.allowForcePush"></a>

```python
allow_force_push: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `code_owner_approval_required`<sup>Required</sup> <a name="code_owner_approval_required" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.codeOwnerApprovalRequired"></a>

```python
code_owner_approval_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `merge_access_levels`<sup>Required</sup> <a name="merge_access_levels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.mergeAccessLevels"></a>

```python
merge_access_levels: DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList">DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevelsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `push_access_levels`<sup>Required</sup> <a name="push_access_levels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.pushAccessLevels"></a>

```python
push_access_levels: DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList">DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList</a>

---

##### `merge_access_levels_input`<sup>Optional</sup> <a name="merge_access_levels_input" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.mergeAccessLevelsInput"></a>

```python
merge_access_levels_input: typing.Union[IResolvable, typing.List[DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesMergeAccessLevels</a>]]

---

##### `push_access_levels_input`<sup>Optional</sup> <a name="push_access_levels_input" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.pushAccessLevelsInput"></a>

```python
push_access_levels_input: typing.Union[IResolvable, typing.List[DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataGitlabProjectProtectedBranchesProtectedBranches]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranches">DataGitlabProjectProtectedBranchesProtectedBranches</a>]

---


### DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList <a name="DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_branches

dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels</a>]]

---


### DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference <a name="DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_branches

dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.resetDeployKeyId">reset_deploy_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_deploy_key_id` <a name="reset_deploy_key_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.resetDeployKeyId"></a>

```python
def reset_deploy_key_id() -> None
```

##### `reset_group_id` <a name="reset_group_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.resetUserId"></a>

```python
def reset_user_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.accessLevelDescription">access_level_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.deployKeyIdInput">deploy_key_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.groupIdInput">group_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.userIdInput">user_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.deployKeyId">deploy_key_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `access_level_description`<sup>Required</sup> <a name="access_level_description" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.accessLevelDescription"></a>

```python
access_level_description: str
```

- *Type:* str

---

##### `deploy_key_id_input`<sup>Optional</sup> <a name="deploy_key_id_input" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.deployKeyIdInput"></a>

```python
deploy_key_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.groupIdInput"></a>

```python
group_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.userIdInput"></a>

```python
user_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deploy_key_id`<sup>Required</sup> <a name="deploy_key_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.deployKeyId"></a>

```python
deploy_key_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedBranches.DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels">DataGitlabProjectProtectedBranchesProtectedBranchesPushAccessLevels</a>]

---



