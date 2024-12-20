# `dataGitlabProjectProtectedTags` Submodule <a name="`dataGitlabProjectProtectedTags` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectProtectedTags <a name="DataGitlabProjectProtectedTags" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/project_protected_tags gitlab_project_protected_tags}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_tags

dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.project">project</a></code> | <code>str</code> | The integer or path with namespace that uniquely identifies the project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.Initializer.parameter.project"></a>

- *Type:* str

The integer or path with namespace that uniquely identifies the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/project_protected_tags#project DataGitlabProjectProtectedTags#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGitlabProjectProtectedTags resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_tags

dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_tags

dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_tags

dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_tags

dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGitlabProjectProtectedTags resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGitlabProjectProtectedTags to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGitlabProjectProtectedTags that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/project_protected_tags#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProjectProtectedTags to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.protectedTags">protected_tags</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList">DataGitlabProjectProtectedTagsProtectedTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `protected_tags`<sup>Required</sup> <a name="protected_tags" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.protectedTags"></a>

```python
protected_tags: DataGitlabProjectProtectedTagsProtectedTagsList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList">DataGitlabProjectProtectedTagsProtectedTagsList</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTags.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectProtectedTagsConfig <a name="DataGitlabProjectProtectedTagsConfig" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_tags

dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.project">project</a></code> | <code>str</code> | The integer or path with namespace that uniquely identifies the project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The integer or path with namespace that uniquely identifies the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/project_protected_tags#project DataGitlabProjectProtectedTags#project}

---

### DataGitlabProjectProtectedTagsProtectedTags <a name="DataGitlabProjectProtectedTagsProtectedTags" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTags.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_tags

dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTags()
```


### DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels <a name="DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_tags

dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels(
  group_id: typing.Union[int, float] = None,
  user_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | The ID of a GitLab group allowed to perform the relevant action. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | The ID of a GitLab user allowed to perform the relevant action. |

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of a GitLab group allowed to perform the relevant action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/project_protected_tags#group_id DataGitlabProjectProtectedTags#group_id}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of a GitLab user allowed to perform the relevant action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/project_protected_tags#user_id DataGitlabProjectProtectedTags#user_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList <a name="DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_tags

dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels">DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels">DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels</a>]]

---


### DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference <a name="DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_tags

dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_id` <a name="reset_group_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.resetUserId"></a>

```python
def reset_user_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.accessLevelDescription">access_level_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.groupIdInput">group_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.userIdInput">user_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels">DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `access_level_description`<sup>Required</sup> <a name="access_level_description" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.accessLevelDescription"></a>

```python
access_level_description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.groupIdInput"></a>

```python
group_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.userIdInput"></a>

```python
user_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsOutputReference.property.internalValue"></a>

```python
internal_value: DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels">DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevels</a>

---


### DataGitlabProjectProtectedTagsProtectedTagsList <a name="DataGitlabProjectProtectedTagsProtectedTagsList" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_tags

dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabProjectProtectedTagsProtectedTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGitlabProjectProtectedTagsProtectedTagsOutputReference <a name="DataGitlabProjectProtectedTagsProtectedTagsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_protected_tags

dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.property.createAccessLevels">create_access_levels</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList">DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTags">DataGitlabProjectProtectedTagsProtectedTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_access_levels`<sup>Required</sup> <a name="create_access_levels" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.property.createAccessLevels"></a>

```python
create_access_levels: DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList">DataGitlabProjectProtectedTagsProtectedTagsCreateAccessLevelsList</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataGitlabProjectProtectedTagsProtectedTags
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectProtectedTags.DataGitlabProjectProtectedTagsProtectedTags">DataGitlabProjectProtectedTagsProtectedTags</a>

---



