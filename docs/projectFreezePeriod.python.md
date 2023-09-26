# `gitlab_project_freeze_period`

Refer to the Terraform Registory for docs: [`gitlab_project_freeze_period`](https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_freeze_period).

# `projectFreezePeriod` Submodule <a name="`projectFreezePeriod` Submodule" id="@cdktf/provider-gitlab.projectFreezePeriod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectFreezePeriod <a name="ProjectFreezePeriod" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_freeze_period gitlab_project_freeze_period}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_freeze_period

projectFreezePeriod.ProjectFreezePeriod(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  freeze_end: str,
  freeze_start: str,
  project: str,
  cron_timezone: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.freezeEnd">freeze_end</a></code> | <code>str</code> | End of the Freeze Period in cron format (e.g. `0 2 * * *`). |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.freezeStart">freeze_start</a></code> | <code>str</code> | Start of the Freeze Period in cron format (e.g. `0 1 * * *`). |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID or URL-encoded path of the project to add the schedule to. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.cronTimezone">cron_timezone</a></code> | <code>str</code> | The timezone. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_freeze_period#id ProjectFreezePeriod#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `freeze_end`<sup>Required</sup> <a name="freeze_end" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.freezeEnd"></a>

- *Type:* str

End of the Freeze Period in cron format (e.g. `0 2 * * *`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_freeze_period#freeze_end ProjectFreezePeriod#freeze_end}

---

##### `freeze_start`<sup>Required</sup> <a name="freeze_start" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.freezeStart"></a>

- *Type:* str

Start of the Freeze Period in cron format (e.g. `0 1 * * *`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_freeze_period#freeze_start ProjectFreezePeriod#freeze_start}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.project"></a>

- *Type:* str

The ID or URL-encoded path of the project to add the schedule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_freeze_period#project ProjectFreezePeriod#project}

---

##### `cron_timezone`<sup>Optional</sup> <a name="cron_timezone" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.cronTimezone"></a>

- *Type:* str

The timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_freeze_period#cron_timezone ProjectFreezePeriod#cron_timezone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_freeze_period#id ProjectFreezePeriod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.resetCronTimezone">reset_cron_timezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_cron_timezone` <a name="reset_cron_timezone" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.resetCronTimezone"></a>

```python
def reset_cron_timezone() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import project_freeze_period

projectFreezePeriod.ProjectFreezePeriod.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import project_freeze_period

projectFreezePeriod.ProjectFreezePeriod.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import project_freeze_period

projectFreezePeriod.ProjectFreezePeriod.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.cronTimezoneInput">cron_timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.freezeEndInput">freeze_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.freezeStartInput">freeze_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.cronTimezone">cron_timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.freezeEnd">freeze_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.freezeStart">freeze_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cron_timezone_input`<sup>Optional</sup> <a name="cron_timezone_input" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.cronTimezoneInput"></a>

```python
cron_timezone_input: str
```

- *Type:* str

---

##### `freeze_end_input`<sup>Optional</sup> <a name="freeze_end_input" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.freezeEndInput"></a>

```python
freeze_end_input: str
```

- *Type:* str

---

##### `freeze_start_input`<sup>Optional</sup> <a name="freeze_start_input" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.freezeStartInput"></a>

```python
freeze_start_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `cron_timezone`<sup>Required</sup> <a name="cron_timezone" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.cronTimezone"></a>

```python
cron_timezone: str
```

- *Type:* str

---

##### `freeze_end`<sup>Required</sup> <a name="freeze_end" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.freezeEnd"></a>

```python
freeze_end: str
```

- *Type:* str

---

##### `freeze_start`<sup>Required</sup> <a name="freeze_start" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.freezeStart"></a>

```python
freeze_start: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectFreezePeriodConfig <a name="ProjectFreezePeriodConfig" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_freeze_period

projectFreezePeriod.ProjectFreezePeriodConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  freeze_end: str,
  freeze_start: str,
  project: str,
  cron_timezone: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.freezeEnd">freeze_end</a></code> | <code>str</code> | End of the Freeze Period in cron format (e.g. `0 2 * * *`). |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.freezeStart">freeze_start</a></code> | <code>str</code> | Start of the Freeze Period in cron format (e.g. `0 1 * * *`). |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.project">project</a></code> | <code>str</code> | The ID or URL-encoded path of the project to add the schedule to. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.cronTimezone">cron_timezone</a></code> | <code>str</code> | The timezone. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_freeze_period#id ProjectFreezePeriod#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `freeze_end`<sup>Required</sup> <a name="freeze_end" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.freezeEnd"></a>

```python
freeze_end: str
```

- *Type:* str

End of the Freeze Period in cron format (e.g. `0 2 * * *`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_freeze_period#freeze_end ProjectFreezePeriod#freeze_end}

---

##### `freeze_start`<sup>Required</sup> <a name="freeze_start" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.freezeStart"></a>

```python
freeze_start: str
```

- *Type:* str

Start of the Freeze Period in cron format (e.g. `0 1 * * *`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_freeze_period#freeze_start ProjectFreezePeriod#freeze_start}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID or URL-encoded path of the project to add the schedule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_freeze_period#project ProjectFreezePeriod#project}

---

##### `cron_timezone`<sup>Optional</sup> <a name="cron_timezone" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.cronTimezone"></a>

```python
cron_timezone: str
```

- *Type:* str

The timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_freeze_period#cron_timezone ProjectFreezePeriod#cron_timezone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_freeze_period#id ProjectFreezePeriod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



