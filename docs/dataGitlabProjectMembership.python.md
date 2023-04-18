# `data_gitlab_project_membership`

Refer to the Terraform Registory for docs: [`data_gitlab_project_membership`](https://www.terraform.io/docs/providers/gitlab/d/project_membership).

# `dataGitlabProjectMembership` Submodule <a name="`dataGitlabProjectMembership` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectMembership <a name="DataGitlabProjectMembership" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/d/project_membership gitlab_project_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_membership

dataGitlabProjectMembership.DataGitlabProjectMembership(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  full_path: str = None,
  id: str = None,
  inherited: typing.Union[bool, IResolvable] = None,
  project_id: typing.Union[int, float] = None,
  query: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.fullPath">full_path</a></code> | <code>str</code> | The full path of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_membership#id DataGitlabProjectMembership#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.inherited">inherited</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Return all project members including members through ancestor groups. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.projectId">project_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.query">query</a></code> | <code>str</code> | A query string to search for members. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `full_path`<sup>Optional</sup> <a name="full_path" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.fullPath"></a>

- *Type:* str

The full path of the project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_membership#full_path DataGitlabProjectMembership#full_path}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_membership#id DataGitlabProjectMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inherited`<sup>Optional</sup> <a name="inherited" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.inherited"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Return all project members including members through ancestor groups.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_membership#inherited DataGitlabProjectMembership#inherited}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.projectId"></a>

- *Type:* typing.Union[int, float]

The ID of the project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_membership#project_id DataGitlabProjectMembership#project_id}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.Initializer.parameter.query"></a>

- *Type:* str

A query string to search for members.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_membership#query DataGitlabProjectMembership#query}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.resetFullPath">reset_full_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.resetInherited">reset_inherited</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.resetQuery">reset_query</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_full_path` <a name="reset_full_path" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.resetFullPath"></a>

```python
def reset_full_path() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_inherited` <a name="reset_inherited" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.resetInherited"></a>

```python
def reset_inherited() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.resetQuery"></a>

```python
def reset_query() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_membership

dataGitlabProjectMembership.DataGitlabProjectMembership.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_membership

dataGitlabProjectMembership.DataGitlabProjectMembership.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_membership

dataGitlabProjectMembership.DataGitlabProjectMembership.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.members">members</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList">DataGitlabProjectMembershipMembersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.fullPathInput">full_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.inheritedInput">inherited_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.projectIdInput">project_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.fullPath">full_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.inherited">inherited</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.projectId">project_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.query">query</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.members"></a>

```python
members: DataGitlabProjectMembershipMembersList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList">DataGitlabProjectMembershipMembersList</a>

---

##### `full_path_input`<sup>Optional</sup> <a name="full_path_input" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.fullPathInput"></a>

```python
full_path_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inherited_input`<sup>Optional</sup> <a name="inherited_input" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.inheritedInput"></a>

```python
inherited_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.projectIdInput"></a>

```python
project_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `full_path`<sup>Required</sup> <a name="full_path" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.fullPath"></a>

```python
full_path: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inherited`<sup>Required</sup> <a name="inherited" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.inherited"></a>

```python
inherited: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.projectId"></a>

```python
project_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.query"></a>

```python
query: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembership.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectMembershipConfig <a name="DataGitlabProjectMembershipConfig" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_membership

dataGitlabProjectMembership.DataGitlabProjectMembershipConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  full_path: str = None,
  id: str = None,
  inherited: typing.Union[bool, IResolvable] = None,
  project_id: typing.Union[int, float] = None,
  query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.fullPath">full_path</a></code> | <code>str</code> | The full path of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_membership#id DataGitlabProjectMembership#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.inherited">inherited</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Return all project members including members through ancestor groups. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.projectId">project_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.query">query</a></code> | <code>str</code> | A query string to search for members. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `full_path`<sup>Optional</sup> <a name="full_path" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.fullPath"></a>

```python
full_path: str
```

- *Type:* str

The full path of the project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_membership#full_path DataGitlabProjectMembership#full_path}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_membership#id DataGitlabProjectMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inherited`<sup>Optional</sup> <a name="inherited" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.inherited"></a>

```python
inherited: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Return all project members including members through ancestor groups.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_membership#inherited DataGitlabProjectMembership#inherited}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.projectId"></a>

```python
project_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_membership#project_id DataGitlabProjectMembership#project_id}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipConfig.property.query"></a>

```python
query: str
```

- *Type:* str

A query string to search for members.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_membership#query DataGitlabProjectMembership#query}

---

### DataGitlabProjectMembershipMembers <a name="DataGitlabProjectMembershipMembers" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembers.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_membership

dataGitlabProjectMembership.DataGitlabProjectMembershipMembers()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectMembershipMembersList <a name="DataGitlabProjectMembershipMembersList" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_membership

dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabProjectMembershipMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGitlabProjectMembershipMembersOutputReference <a name="DataGitlabProjectMembershipMembersOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_membership

dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.avatarUrl">avatar_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.webUrl">web_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembers">DataGitlabProjectMembershipMembers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `avatar_url`<sup>Required</sup> <a name="avatar_url" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.avatarUrl"></a>

```python
avatar_url: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `web_url`<sup>Required</sup> <a name="web_url" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.webUrl"></a>

```python
web_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembersOutputReference.property.internalValue"></a>

```python
internal_value: DataGitlabProjectMembershipMembers
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMembership.DataGitlabProjectMembershipMembers">DataGitlabProjectMembershipMembers</a>

---



