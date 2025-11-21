# `dataGitlabProjectMilestones` Submodule <a name="`dataGitlabProjectMilestones` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectMilestones <a name="DataGitlabProjectMilestones" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_milestones gitlab_project_milestones}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_milestones

dataGitlabProjectMilestones.DataGitlabProjectMilestones(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  project: str,
  iids: typing.List[typing.Union[int, float]] = None,
  include_parent_milestones: bool | IResolvable = None,
  search: str = None,
  state: str = None,
  title: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID or URL-encoded path of the project owned by the authenticated user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.iids">iids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Return only the milestones having the given `iid` (Note: ignored if `include_parent_milestones` is set as `true`). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.includeParentMilestones">include_parent_milestones</a></code> | <code>bool \| cdktf.IResolvable</code> | Include group milestones from parent group and its ancestors. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.search">search</a></code> | <code>str</code> | Return only milestones with a title or description matching the provided string. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.state">state</a></code> | <code>str</code> | Return only `active` or `closed` milestones. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.title">title</a></code> | <code>str</code> | Return only the milestones having the given `title`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.project"></a>

- *Type:* str

The ID or URL-encoded path of the project owned by the authenticated user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_milestones#project DataGitlabProjectMilestones#project}

---

##### `iids`<sup>Optional</sup> <a name="iids" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.iids"></a>

- *Type:* typing.List[typing.Union[int, float]]

Return only the milestones having the given `iid` (Note: ignored if `include_parent_milestones` is set as `true`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_milestones#iids DataGitlabProjectMilestones#iids}

---

##### `include_parent_milestones`<sup>Optional</sup> <a name="include_parent_milestones" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.includeParentMilestones"></a>

- *Type:* bool | cdktf.IResolvable

Include group milestones from parent group and its ancestors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_milestones#include_parent_milestones DataGitlabProjectMilestones#include_parent_milestones}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.search"></a>

- *Type:* str

Return only milestones with a title or description matching the provided string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_milestones#search DataGitlabProjectMilestones#search}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.state"></a>

- *Type:* str

Return only `active` or `closed` milestones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_milestones#state DataGitlabProjectMilestones#state}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.title"></a>

- *Type:* str

Return only the milestones having the given `title`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_milestones#title DataGitlabProjectMilestones#title}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetIids">reset_iids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetIncludeParentMilestones">reset_include_parent_milestones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetSearch">reset_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetTitle">reset_title</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_iids` <a name="reset_iids" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetIids"></a>

```python
def reset_iids() -> None
```

##### `reset_include_parent_milestones` <a name="reset_include_parent_milestones" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetIncludeParentMilestones"></a>

```python
def reset_include_parent_milestones() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetSearch"></a>

```python
def reset_search() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetTitle"></a>

```python
def reset_title() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGitlabProjectMilestones resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_milestones

dataGitlabProjectMilestones.DataGitlabProjectMilestones.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_milestones

dataGitlabProjectMilestones.DataGitlabProjectMilestones.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_milestones

dataGitlabProjectMilestones.DataGitlabProjectMilestones.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_milestones

dataGitlabProjectMilestones.DataGitlabProjectMilestones.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGitlabProjectMilestones resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGitlabProjectMilestones to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGitlabProjectMilestones that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_milestones#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProjectMilestones to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.milestones">milestones</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList">DataGitlabProjectMilestonesMilestonesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.iidsInput">iids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.includeParentMilestonesInput">include_parent_milestones_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.iids">iids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.includeParentMilestones">include_parent_milestones</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.search">search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.title">title</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `milestones`<sup>Required</sup> <a name="milestones" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.milestones"></a>

```python
milestones: DataGitlabProjectMilestonesMilestonesList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList">DataGitlabProjectMilestonesMilestonesList</a>

---

##### `iids_input`<sup>Optional</sup> <a name="iids_input" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.iidsInput"></a>

```python
iids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `include_parent_milestones_input`<sup>Optional</sup> <a name="include_parent_milestones_input" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.includeParentMilestonesInput"></a>

```python
include_parent_milestones_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `iids`<sup>Required</sup> <a name="iids" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.iids"></a>

```python
iids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `include_parent_milestones`<sup>Required</sup> <a name="include_parent_milestones" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.includeParentMilestones"></a>

```python
include_parent_milestones: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.search"></a>

```python
search: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.title"></a>

```python
title: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectMilestonesConfig <a name="DataGitlabProjectMilestonesConfig" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_milestones

dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  project: str,
  iids: typing.List[typing.Union[int, float]] = None,
  include_parent_milestones: bool | IResolvable = None,
  search: str = None,
  state: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.project">project</a></code> | <code>str</code> | The ID or URL-encoded path of the project owned by the authenticated user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.iids">iids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Return only the milestones having the given `iid` (Note: ignored if `include_parent_milestones` is set as `true`). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.includeParentMilestones">include_parent_milestones</a></code> | <code>bool \| cdktf.IResolvable</code> | Include group milestones from parent group and its ancestors. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.search">search</a></code> | <code>str</code> | Return only milestones with a title or description matching the provided string. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.state">state</a></code> | <code>str</code> | Return only `active` or `closed` milestones. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.title">title</a></code> | <code>str</code> | Return only the milestones having the given `title`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID or URL-encoded path of the project owned by the authenticated user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_milestones#project DataGitlabProjectMilestones#project}

---

##### `iids`<sup>Optional</sup> <a name="iids" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.iids"></a>

```python
iids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Return only the milestones having the given `iid` (Note: ignored if `include_parent_milestones` is set as `true`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_milestones#iids DataGitlabProjectMilestones#iids}

---

##### `include_parent_milestones`<sup>Optional</sup> <a name="include_parent_milestones" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.includeParentMilestones"></a>

```python
include_parent_milestones: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Include group milestones from parent group and its ancestors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_milestones#include_parent_milestones DataGitlabProjectMilestones#include_parent_milestones}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.search"></a>

```python
search: str
```

- *Type:* str

Return only milestones with a title or description matching the provided string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_milestones#search DataGitlabProjectMilestones#search}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Return only `active` or `closed` milestones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_milestones#state DataGitlabProjectMilestones#state}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Return only the milestones having the given `title`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/project_milestones#title DataGitlabProjectMilestones#title}

---

### DataGitlabProjectMilestonesMilestones <a name="DataGitlabProjectMilestonesMilestones" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestones"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestones.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_milestones

dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestones()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectMilestonesMilestonesList <a name="DataGitlabProjectMilestonesMilestonesList" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_milestones

dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabProjectMilestonesMilestonesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGitlabProjectMilestonesMilestonesOutputReference <a name="DataGitlabProjectMilestonesMilestonesOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_milestones

dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.dueDate">due_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.expired">expired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.iid">iid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.milestoneId">milestone_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.projectId">project_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.webUrl">web_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestones">DataGitlabProjectMilestonesMilestones</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `due_date`<sup>Required</sup> <a name="due_date" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.dueDate"></a>

```python
due_date: str
```

- *Type:* str

---

##### `expired`<sup>Required</sup> <a name="expired" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.expired"></a>

```python
expired: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `iid`<sup>Required</sup> <a name="iid" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.iid"></a>

```python
iid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `milestone_id`<sup>Required</sup> <a name="milestone_id" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.milestoneId"></a>

```python
milestone_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.projectId"></a>

```python
project_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `web_url`<sup>Required</sup> <a name="web_url" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.webUrl"></a>

```python
web_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.internalValue"></a>

```python
internal_value: DataGitlabProjectMilestonesMilestones
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestones">DataGitlabProjectMilestonesMilestones</a>

---



