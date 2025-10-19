# `dataGitlabProjectApprovalRules` Submodule <a name="`dataGitlabProjectApprovalRules` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectApprovalRules <a name="DataGitlabProjectApprovalRules" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_approval_rules gitlab_project_approval_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_approval_rules

dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules(
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
  approval_rules: IResolvable | typing.List[DataGitlabProjectApprovalRulesApprovalRules] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID or path with namespace that identifies the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.approvalRules">approval_rules</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules">DataGitlabProjectApprovalRulesApprovalRules</a>]</code> | approval_rules block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.project"></a>

- *Type:* str

The ID or path with namespace that identifies the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_approval_rules#project DataGitlabProjectApprovalRules#project}

---

##### `approval_rules`<sup>Optional</sup> <a name="approval_rules" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.Initializer.parameter.approvalRules"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules">DataGitlabProjectApprovalRulesApprovalRules</a>]

approval_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_approval_rules#approval_rules DataGitlabProjectApprovalRules#approval_rules}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.putApprovalRules">put_approval_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.resetApprovalRules">reset_approval_rules</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_approval_rules` <a name="put_approval_rules" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.putApprovalRules"></a>

```python
def put_approval_rules(
  value: IResolvable | typing.List[DataGitlabProjectApprovalRulesApprovalRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.putApprovalRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules">DataGitlabProjectApprovalRulesApprovalRules</a>]

---

##### `reset_approval_rules` <a name="reset_approval_rules" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.resetApprovalRules"></a>

```python
def reset_approval_rules() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGitlabProjectApprovalRules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_approval_rules

dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_approval_rules

dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_approval_rules

dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_approval_rules

dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGitlabProjectApprovalRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGitlabProjectApprovalRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGitlabProjectApprovalRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_approval_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProjectApprovalRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.approvalRules">approval_rules</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList">DataGitlabProjectApprovalRulesApprovalRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.approvalRulesInput">approval_rules_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules">DataGitlabProjectApprovalRulesApprovalRules</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `approval_rules`<sup>Required</sup> <a name="approval_rules" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.approvalRules"></a>

```python
approval_rules: DataGitlabProjectApprovalRulesApprovalRulesList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList">DataGitlabProjectApprovalRulesApprovalRulesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `approval_rules_input`<sup>Optional</sup> <a name="approval_rules_input" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.approvalRulesInput"></a>

```python
approval_rules_input: IResolvable | typing.List[DataGitlabProjectApprovalRulesApprovalRules]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules">DataGitlabProjectApprovalRulesApprovalRules</a>]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectApprovalRulesApprovalRules <a name="DataGitlabProjectApprovalRulesApprovalRules" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_approval_rules

dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules()
```


### DataGitlabProjectApprovalRulesConfig <a name="DataGitlabProjectApprovalRulesConfig" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_approval_rules

dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  project: str,
  approval_rules: IResolvable | typing.List[DataGitlabProjectApprovalRulesApprovalRules] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.project">project</a></code> | <code>str</code> | The ID or path with namespace that identifies the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.approvalRules">approval_rules</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules">DataGitlabProjectApprovalRulesApprovalRules</a>]</code> | approval_rules block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID or path with namespace that identifies the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_approval_rules#project DataGitlabProjectApprovalRules#project}

---

##### `approval_rules`<sup>Optional</sup> <a name="approval_rules" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesConfig.property.approvalRules"></a>

```python
approval_rules: IResolvable | typing.List[DataGitlabProjectApprovalRulesApprovalRules]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules">DataGitlabProjectApprovalRulesApprovalRules</a>]

approval_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_approval_rules#approval_rules DataGitlabProjectApprovalRules#approval_rules}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectApprovalRulesApprovalRulesList <a name="DataGitlabProjectApprovalRulesApprovalRulesList" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_approval_rules

dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGitlabProjectApprovalRulesApprovalRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules">DataGitlabProjectApprovalRulesApprovalRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataGitlabProjectApprovalRulesApprovalRules]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules">DataGitlabProjectApprovalRulesApprovalRules</a>]

---


### DataGitlabProjectApprovalRulesApprovalRulesOutputReference <a name="DataGitlabProjectApprovalRulesApprovalRulesOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import data_gitlab_project_approval_rules

dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.appliesToAllProtectedBranches">applies_to_all_protected_branches</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.approvalsRequired">approvals_required</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.eligibleApproverIds">eligible_approver_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.groupIds">group_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.protectedBranchIds">protected_branch_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.reportType">report_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.ruleType">rule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.userIds">user_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules">DataGitlabProjectApprovalRulesApprovalRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `applies_to_all_protected_branches`<sup>Required</sup> <a name="applies_to_all_protected_branches" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.appliesToAllProtectedBranches"></a>

```python
applies_to_all_protected_branches: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `approvals_required`<sup>Required</sup> <a name="approvals_required" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.approvalsRequired"></a>

```python
approvals_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `eligible_approver_ids`<sup>Required</sup> <a name="eligible_approver_ids" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.eligibleApproverIds"></a>

```python
eligible_approver_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `group_ids`<sup>Required</sup> <a name="group_ids" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.groupIds"></a>

```python
group_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protected_branch_ids`<sup>Required</sup> <a name="protected_branch_ids" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.protectedBranchIds"></a>

```python
protected_branch_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `report_type`<sup>Required</sup> <a name="report_type" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.reportType"></a>

```python
report_type: str
```

- *Type:* str

---

##### `rule_type`<sup>Required</sup> <a name="rule_type" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.ruleType"></a>

```python
rule_type: str
```

- *Type:* str

---

##### `user_ids`<sup>Required</sup> <a name="user_ids" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.userIds"></a>

```python
user_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataGitlabProjectApprovalRulesApprovalRules
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.dataGitlabProjectApprovalRules.DataGitlabProjectApprovalRulesApprovalRules">DataGitlabProjectApprovalRulesApprovalRules</a>

---



