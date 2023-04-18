# `gitlab_service_custom_issue_tracker`

Refer to the Terraform Registory for docs: [`gitlab_service_custom_issue_tracker`](https://www.terraform.io/docs/providers/gitlab/r/service_custom_issue_tracker).

# `serviceCustomIssueTracker` Submodule <a name="`serviceCustomIssueTracker` Submodule" id="@cdktf/provider-gitlab.serviceCustomIssueTracker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceCustomIssueTracker <a name="ServiceCustomIssueTracker" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/service_custom_issue_tracker gitlab_service_custom_issue_tracker}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import service_custom_issue_tracker

serviceCustomIssueTracker.ServiceCustomIssueTracker(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  issues_url: str,
  project: str,
  project_url: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.issuesUrl">issues_url</a></code> | <code>str</code> | The URL to view an issue in the external issue tracker. Must contain :id. |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID or full path of the project for the custom issue tracker. |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.projectUrl">project_url</a></code> | <code>str</code> | The URL to the project in the external issue tracker. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `issues_url`<sup>Required</sup> <a name="issues_url" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.issuesUrl"></a>

- *Type:* str

The URL to view an issue in the external issue tracker. Must contain :id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_custom_issue_tracker#issues_url ServiceCustomIssueTracker#issues_url}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.project"></a>

- *Type:* str

The ID or full path of the project for the custom issue tracker.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_custom_issue_tracker#project ServiceCustomIssueTracker#project}

---

##### `project_url`<sup>Required</sup> <a name="project_url" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.Initializer.parameter.projectUrl"></a>

- *Type:* str

The URL to the project in the external issue tracker.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_custom_issue_tracker#project_url ServiceCustomIssueTracker#project_url}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import service_custom_issue_tracker

serviceCustomIssueTracker.ServiceCustomIssueTracker.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import service_custom_issue_tracker

serviceCustomIssueTracker.ServiceCustomIssueTracker.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import service_custom_issue_tracker

serviceCustomIssueTracker.ServiceCustomIssueTracker.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.slug">slug</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.issuesUrlInput">issues_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.projectUrlInput">project_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.issuesUrl">issues_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.projectUrl">project_url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.slug"></a>

```python
slug: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `issues_url_input`<sup>Optional</sup> <a name="issues_url_input" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.issuesUrlInput"></a>

```python
issues_url_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `project_url_input`<sup>Optional</sup> <a name="project_url_input" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.projectUrlInput"></a>

```python
project_url_input: str
```

- *Type:* str

---

##### `issues_url`<sup>Required</sup> <a name="issues_url" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.issuesUrl"></a>

```python
issues_url: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `project_url`<sup>Required</sup> <a name="project_url" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.projectUrl"></a>

```python
project_url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTracker.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceCustomIssueTrackerConfig <a name="ServiceCustomIssueTrackerConfig" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import service_custom_issue_tracker

serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  issues_url: str,
  project: str,
  project_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.issuesUrl">issues_url</a></code> | <code>str</code> | The URL to view an issue in the external issue tracker. Must contain :id. |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.project">project</a></code> | <code>str</code> | The ID or full path of the project for the custom issue tracker. |
| <code><a href="#@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.projectUrl">project_url</a></code> | <code>str</code> | The URL to the project in the external issue tracker. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `issues_url`<sup>Required</sup> <a name="issues_url" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.issuesUrl"></a>

```python
issues_url: str
```

- *Type:* str

The URL to view an issue in the external issue tracker. Must contain :id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_custom_issue_tracker#issues_url ServiceCustomIssueTracker#issues_url}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID or full path of the project for the custom issue tracker.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_custom_issue_tracker#project ServiceCustomIssueTracker#project}

---

##### `project_url`<sup>Required</sup> <a name="project_url" id="@cdktf/provider-gitlab.serviceCustomIssueTracker.ServiceCustomIssueTrackerConfig.property.projectUrl"></a>

```python
project_url: str
```

- *Type:* str

The URL to the project in the external issue tracker.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_custom_issue_tracker#project_url ServiceCustomIssueTracker#project_url}

---



