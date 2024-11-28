# `dataGitlabRelease` Submodule <a name="`dataGitlabRelease` Submodule" id="@cdktf/provider-gitlab.dataGitlabRelease"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabRelease <a name="DataGitlabRelease" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/release gitlab_release}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_release

dataGitlabRelease.DataGitlabRelease(
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
  tag_name: str,
  assets: DataGitlabReleaseAssets = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID or URL-encoded path of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.tagName">tag_name</a></code> | <code>str</code> | The Git tag the release is associated with. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.assets">assets</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssets">DataGitlabReleaseAssets</a></code> | assets block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.projectId"></a>

- *Type:* str

The ID or URL-encoded path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/release#project_id DataGitlabRelease#project_id}

---

##### `tag_name`<sup>Required</sup> <a name="tag_name" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.tagName"></a>

- *Type:* str

The Git tag the release is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/release#tag_name DataGitlabRelease#tag_name}

---

##### `assets`<sup>Optional</sup> <a name="assets" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.assets"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssets">DataGitlabReleaseAssets</a>

assets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/release#assets DataGitlabRelease#assets}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.putAssets">put_assets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.resetAssets">reset_assets</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_assets` <a name="put_assets" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.putAssets"></a>

```python
def put_assets(
  links: typing.Union[IResolvable, typing.List[DataGitlabReleaseAssetsLinks]] = None,
  sources: typing.Union[IResolvable, typing.List[DataGitlabReleaseAssetsSources]] = None
) -> None
```

###### `links`<sup>Optional</sup> <a name="links" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.putAssets.parameter.links"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinks">DataGitlabReleaseAssetsLinks</a>]]

links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/release#links DataGitlabRelease#links}

---

###### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.putAssets.parameter.sources"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSources">DataGitlabReleaseAssetsSources</a>]]

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/release#sources DataGitlabRelease#sources}

---

##### `reset_assets` <a name="reset_assets" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.resetAssets"></a>

```python
def reset_assets() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGitlabRelease resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_release

dataGitlabRelease.DataGitlabRelease.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_release

dataGitlabRelease.DataGitlabRelease.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_release

dataGitlabRelease.DataGitlabRelease.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_release

dataGitlabRelease.DataGitlabRelease.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGitlabRelease resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGitlabRelease to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGitlabRelease that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/release#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabRelease to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.assets">assets</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference">DataGitlabReleaseAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.releasedAt">released_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.assetsInput">assets_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssets">DataGitlabReleaseAssets</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.tagNameInput">tag_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.tagName">tag_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `assets`<sup>Required</sup> <a name="assets" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.assets"></a>

```python
assets: DataGitlabReleaseAssetsOutputReference
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference">DataGitlabReleaseAssetsOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `released_at`<sup>Required</sup> <a name="released_at" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.releasedAt"></a>

```python
released_at: str
```

- *Type:* str

---

##### `assets_input`<sup>Optional</sup> <a name="assets_input" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.assetsInput"></a>

```python
assets_input: typing.Union[IResolvable, DataGitlabReleaseAssets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssets">DataGitlabReleaseAssets</a>]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `tag_name_input`<sup>Optional</sup> <a name="tag_name_input" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.tagNameInput"></a>

```python
tag_name_input: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `tag_name`<sup>Required</sup> <a name="tag_name" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.tagName"></a>

```python
tag_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabReleaseAssets <a name="DataGitlabReleaseAssets" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssets.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_release

dataGitlabRelease.DataGitlabReleaseAssets(
  links: typing.Union[IResolvable, typing.List[DataGitlabReleaseAssetsLinks]] = None,
  sources: typing.Union[IResolvable, typing.List[DataGitlabReleaseAssetsSources]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssets.property.links">links</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinks">DataGitlabReleaseAssetsLinks</a>]]</code> | links block. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssets.property.sources">sources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSources">DataGitlabReleaseAssetsSources</a>]]</code> | sources block. |

---

##### `links`<sup>Optional</sup> <a name="links" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssets.property.links"></a>

```python
links: typing.Union[IResolvable, typing.List[DataGitlabReleaseAssetsLinks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinks">DataGitlabReleaseAssetsLinks</a>]]

links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/release#links DataGitlabRelease#links}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssets.property.sources"></a>

```python
sources: typing.Union[IResolvable, typing.List[DataGitlabReleaseAssetsSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSources">DataGitlabReleaseAssetsSources</a>]]

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/release#sources DataGitlabRelease#sources}

---

### DataGitlabReleaseAssetsLinks <a name="DataGitlabReleaseAssetsLinks" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinks.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_release

dataGitlabRelease.DataGitlabReleaseAssetsLinks()
```


### DataGitlabReleaseAssetsSources <a name="DataGitlabReleaseAssetsSources" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSources.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_release

dataGitlabRelease.DataGitlabReleaseAssetsSources()
```


### DataGitlabReleaseConfig <a name="DataGitlabReleaseConfig" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_release

dataGitlabRelease.DataGitlabReleaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  tag_name: str,
  assets: DataGitlabReleaseAssets = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID or URL-encoded path of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.tagName">tag_name</a></code> | <code>str</code> | The Git tag the release is associated with. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.assets">assets</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssets">DataGitlabReleaseAssets</a></code> | assets block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID or URL-encoded path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/release#project_id DataGitlabRelease#project_id}

---

##### `tag_name`<sup>Required</sup> <a name="tag_name" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.tagName"></a>

```python
tag_name: str
```

- *Type:* str

The Git tag the release is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/release#tag_name DataGitlabRelease#tag_name}

---

##### `assets`<sup>Optional</sup> <a name="assets" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.assets"></a>

```python
assets: DataGitlabReleaseAssets
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssets">DataGitlabReleaseAssets</a>

assets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/release#assets DataGitlabRelease#assets}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGitlabReleaseAssetsLinksList <a name="DataGitlabReleaseAssetsLinksList" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_release

dataGitlabRelease.DataGitlabReleaseAssetsLinksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabReleaseAssetsLinksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinks">DataGitlabReleaseAssetsLinks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataGitlabReleaseAssetsLinks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinks">DataGitlabReleaseAssetsLinks</a>]]

---


### DataGitlabReleaseAssetsLinksOutputReference <a name="DataGitlabReleaseAssetsLinksOutputReference" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_release

dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.linkType">link_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinks">DataGitlabReleaseAssetsLinks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `link_type`<sup>Required</sup> <a name="link_type" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.linkType"></a>

```python
link_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataGitlabReleaseAssetsLinks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinks">DataGitlabReleaseAssetsLinks</a>]

---


### DataGitlabReleaseAssetsOutputReference <a name="DataGitlabReleaseAssetsOutputReference" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_release

dataGitlabRelease.DataGitlabReleaseAssetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.putLinks">put_links</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.putSources">put_sources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.resetLinks">reset_links</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.resetSources">reset_sources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_links` <a name="put_links" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.putLinks"></a>

```python
def put_links(
  value: typing.Union[IResolvable, typing.List[DataGitlabReleaseAssetsLinks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.putLinks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinks">DataGitlabReleaseAssetsLinks</a>]]

---

##### `put_sources` <a name="put_sources" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.putSources"></a>

```python
def put_sources(
  value: typing.Union[IResolvable, typing.List[DataGitlabReleaseAssetsSources]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.putSources.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSources">DataGitlabReleaseAssetsSources</a>]]

---

##### `reset_links` <a name="reset_links" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.resetLinks"></a>

```python
def reset_links() -> None
```

##### `reset_sources` <a name="reset_sources" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.resetSources"></a>

```python
def reset_sources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.links">links</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList">DataGitlabReleaseAssetsLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList">DataGitlabReleaseAssetsSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.linksInput">links_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinks">DataGitlabReleaseAssetsLinks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.sourcesInput">sources_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSources">DataGitlabReleaseAssetsSources</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssets">DataGitlabReleaseAssets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.links"></a>

```python
links: DataGitlabReleaseAssetsLinksList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList">DataGitlabReleaseAssetsLinksList</a>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.sources"></a>

```python
sources: DataGitlabReleaseAssetsSourcesList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList">DataGitlabReleaseAssetsSourcesList</a>

---

##### `links_input`<sup>Optional</sup> <a name="links_input" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.linksInput"></a>

```python
links_input: typing.Union[IResolvable, typing.List[DataGitlabReleaseAssetsLinks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinks">DataGitlabReleaseAssetsLinks</a>]]

---

##### `sources_input`<sup>Optional</sup> <a name="sources_input" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.sourcesInput"></a>

```python
sources_input: typing.Union[IResolvable, typing.List[DataGitlabReleaseAssetsSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSources">DataGitlabReleaseAssetsSources</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataGitlabReleaseAssets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssets">DataGitlabReleaseAssets</a>]

---


### DataGitlabReleaseAssetsSourcesList <a name="DataGitlabReleaseAssetsSourcesList" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_release

dataGitlabRelease.DataGitlabReleaseAssetsSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabReleaseAssetsSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSources">DataGitlabReleaseAssetsSources</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataGitlabReleaseAssetsSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSources">DataGitlabReleaseAssetsSources</a>]]

---


### DataGitlabReleaseAssetsSourcesOutputReference <a name="DataGitlabReleaseAssetsSourcesOutputReference" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_release

dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSources">DataGitlabReleaseAssetsSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataGitlabReleaseAssetsSources]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSources">DataGitlabReleaseAssetsSources</a>]

---



