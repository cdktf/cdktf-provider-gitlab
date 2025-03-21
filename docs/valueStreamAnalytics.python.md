# `valueStreamAnalytics` Submodule <a name="`valueStreamAnalytics` Submodule" id="@cdktf/provider-gitlab.valueStreamAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ValueStreamAnalytics <a name="ValueStreamAnalytics" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics gitlab_value_stream_analytics}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import value_stream_analytics

valueStreamAnalytics.ValueStreamAnalytics(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  stages: typing.Union[IResolvable, typing.List[ValueStreamAnalyticsStages]],
  group_full_path: str = None,
  project_full_path: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the value stream. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.stages">stages</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>]]</code> | Stages of the value stream. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.groupFullPath">group_full_path</a></code> | <code>str</code> | Full path of the group the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.projectFullPath">project_full_path</a></code> | <code>str</code> | Full path of the project the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.name"></a>

- *Type:* str

The name of the value stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#name ValueStreamAnalytics#name}

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.stages"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>]]

Stages of the value stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#stages ValueStreamAnalytics#stages}

---

##### `group_full_path`<sup>Optional</sup> <a name="group_full_path" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.groupFullPath"></a>

- *Type:* str

Full path of the group the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#group_full_path ValueStreamAnalytics#group_full_path}

---

##### `project_full_path`<sup>Optional</sup> <a name="project_full_path" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.projectFullPath"></a>

- *Type:* str

Full path of the project the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#project_full_path ValueStreamAnalytics#project_full_path}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.putStages">put_stages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetGroupFullPath">reset_group_full_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetProjectFullPath">reset_project_full_path</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_stages` <a name="put_stages" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.putStages"></a>

```python
def put_stages(
  value: typing.Union[IResolvable, typing.List[ValueStreamAnalyticsStages]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.putStages.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>]]

---

##### `reset_group_full_path` <a name="reset_group_full_path" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetGroupFullPath"></a>

```python
def reset_group_full_path() -> None
```

##### `reset_project_full_path` <a name="reset_project_full_path" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetProjectFullPath"></a>

```python
def reset_project_full_path() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ValueStreamAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import value_stream_analytics

valueStreamAnalytics.ValueStreamAnalytics.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import value_stream_analytics

valueStreamAnalytics.ValueStreamAnalytics.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import value_stream_analytics

valueStreamAnalytics.ValueStreamAnalytics.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import value_stream_analytics

valueStreamAnalytics.ValueStreamAnalytics.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ValueStreamAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ValueStreamAnalytics to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ValueStreamAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ValueStreamAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.stages">stages</a></code> | <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList">ValueStreamAnalyticsStagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.groupFullPathInput">group_full_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.projectFullPathInput">project_full_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.stagesInput">stages_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.groupFullPath">group_full_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.projectFullPath">project_full_path</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.stages"></a>

```python
stages: ValueStreamAnalyticsStagesList
```

- *Type:* <a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList">ValueStreamAnalyticsStagesList</a>

---

##### `group_full_path_input`<sup>Optional</sup> <a name="group_full_path_input" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.groupFullPathInput"></a>

```python
group_full_path_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_full_path_input`<sup>Optional</sup> <a name="project_full_path_input" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.projectFullPathInput"></a>

```python
project_full_path_input: str
```

- *Type:* str

---

##### `stages_input`<sup>Optional</sup> <a name="stages_input" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.stagesInput"></a>

```python
stages_input: typing.Union[IResolvable, typing.List[ValueStreamAnalyticsStages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>]]

---

##### `group_full_path`<sup>Required</sup> <a name="group_full_path" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.groupFullPath"></a>

```python
group_full_path: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_full_path`<sup>Required</sup> <a name="project_full_path" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.projectFullPath"></a>

```python
project_full_path: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ValueStreamAnalyticsConfig <a name="ValueStreamAnalyticsConfig" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import value_stream_analytics

valueStreamAnalytics.ValueStreamAnalyticsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  stages: typing.Union[IResolvable, typing.List[ValueStreamAnalyticsStages]],
  group_full_path: str = None,
  project_full_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.name">name</a></code> | <code>str</code> | The name of the value stream. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.stages">stages</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>]]</code> | Stages of the value stream. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.groupFullPath">group_full_path</a></code> | <code>str</code> | Full path of the group the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.projectFullPath">project_full_path</a></code> | <code>str</code> | Full path of the project the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the value stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#name ValueStreamAnalytics#name}

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.stages"></a>

```python
stages: typing.Union[IResolvable, typing.List[ValueStreamAnalyticsStages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>]]

Stages of the value stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#stages ValueStreamAnalytics#stages}

---

##### `group_full_path`<sup>Optional</sup> <a name="group_full_path" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.groupFullPath"></a>

```python
group_full_path: str
```

- *Type:* str

Full path of the group the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#group_full_path ValueStreamAnalytics#group_full_path}

---

##### `project_full_path`<sup>Optional</sup> <a name="project_full_path" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.projectFullPath"></a>

```python
project_full_path: str
```

- *Type:* str

Full path of the project the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#project_full_path ValueStreamAnalytics#project_full_path}

---

### ValueStreamAnalyticsStages <a name="ValueStreamAnalyticsStages" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import value_stream_analytics

valueStreamAnalytics.ValueStreamAnalyticsStages(
  name: str,
  custom: typing.Union[bool, IResolvable] = None,
  end_event_identifier: str = None,
  end_event_label_id: str = None,
  hidden: typing.Union[bool, IResolvable] = None,
  start_event_identifier: str = None,
  start_event_label_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.name">name</a></code> | <code>str</code> | The name of the value stream stage. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.custom">custom</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean whether the stage is customized. If false, it assigns a built-in default stage by name. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.endEventIdentifier">end_event_identifier</a></code> | <code>str</code> | End event identifier. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.endEventLabelId">end_event_label_id</a></code> | <code>str</code> | Label ID associated with the end event identifier. In the format of `gid://gitlab/GroupLabel/<id>` or `gid://gitlab/ProjectLabel/<id>`. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.hidden">hidden</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean whether the stage is hidden, GitLab provided default stages are hidden by default. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.startEventIdentifier">start_event_identifier</a></code> | <code>str</code> | Start event identifier. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.startEventLabelId">start_event_label_id</a></code> | <code>str</code> | Label ID associated with the start event identifier. In the format of `gid://gitlab/GroupLabel/<id>` or `gid://gitlab/ProjectLabel/<id>`. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the value stream stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#name ValueStreamAnalytics#name}

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.custom"></a>

```python
custom: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean whether the stage is customized. If false, it assigns a built-in default stage by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#custom ValueStreamAnalytics#custom}

---

##### `end_event_identifier`<sup>Optional</sup> <a name="end_event_identifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.endEventIdentifier"></a>

```python
end_event_identifier: str
```

- *Type:* str

End event identifier.

Valid values are: `CODE_STAGE_START`, `ISSUE_CLOSED`, `ISSUE_CREATED`, `ISSUE_DEPLOYED_TO_PRODUCTION`, `ISSUE_FIRST_ADDED_TO_BOARD`, `ISSUE_FIRST_ADDED_TO_ITERATION`, `ISSUE_FIRST_ASSIGNED_AT`, `ISSUE_FIRST_ASSOCIATED_WITH_MILESTONE`, `ISSUE_FIRST_MENTIONED_IN_COMMIT`, `ISSUE_LABEL_ADDED`, `ISSUE_LABEL_REMOVED`, `ISSUE_LAST_EDITED`, `ISSUE_STAGE_END`, `MERGE_REQUEST_CLOSED`, `MERGE_REQUEST_CREATED`, `MERGE_REQUEST_FIRST_ASSIGNED_AT`, `MERGE_REQUEST_FIRST_COMMIT_AT`, `MERGE_REQUEST_FIRST_DEPLOYED_TO_PRODUCTION`, `MERGE_REQUEST_LABEL_ADDED`, `MERGE_REQUEST_LABEL_REMOVED`, `MERGE_REQUEST_LAST_BUILD_FINISHED`, `MERGE_REQUEST_LAST_BUILD_STARTED`, `MERGE_REQUEST_LAST_EDITED`, `MERGE_REQUEST_MERGED`, `MERGE_REQUEST_REVIEWER_FIRST_ASSIGNED`, `MERGE_REQUEST_PLAN_STAGE_START`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#end_event_identifier ValueStreamAnalytics#end_event_identifier}

---

##### `end_event_label_id`<sup>Optional</sup> <a name="end_event_label_id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.endEventLabelId"></a>

```python
end_event_label_id: str
```

- *Type:* str

Label ID associated with the end event identifier. In the format of `gid://gitlab/GroupLabel/<id>` or `gid://gitlab/ProjectLabel/<id>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#end_event_label_id ValueStreamAnalytics#end_event_label_id}

---

##### `hidden`<sup>Optional</sup> <a name="hidden" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.hidden"></a>

```python
hidden: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean whether the stage is hidden, GitLab provided default stages are hidden by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#hidden ValueStreamAnalytics#hidden}

---

##### `start_event_identifier`<sup>Optional</sup> <a name="start_event_identifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.startEventIdentifier"></a>

```python
start_event_identifier: str
```

- *Type:* str

Start event identifier.

Valid values are: `CODE_STAGE_START`, `ISSUE_CLOSED`, `ISSUE_CREATED`, `ISSUE_DEPLOYED_TO_PRODUCTION`, `ISSUE_FIRST_ADDED_TO_BOARD`, `ISSUE_FIRST_ADDED_TO_ITERATION`, `ISSUE_FIRST_ASSIGNED_AT`, `ISSUE_FIRST_ASSOCIATED_WITH_MILESTONE`, `ISSUE_FIRST_MENTIONED_IN_COMMIT`, `ISSUE_LABEL_ADDED`, `ISSUE_LABEL_REMOVED`, `ISSUE_LAST_EDITED`, `ISSUE_STAGE_END`, `MERGE_REQUEST_CLOSED`, `MERGE_REQUEST_CREATED`, `MERGE_REQUEST_FIRST_ASSIGNED_AT`, `MERGE_REQUEST_FIRST_COMMIT_AT`, `MERGE_REQUEST_FIRST_DEPLOYED_TO_PRODUCTION`, `MERGE_REQUEST_LABEL_ADDED`, `MERGE_REQUEST_LABEL_REMOVED`, `MERGE_REQUEST_LAST_BUILD_FINISHED`, `MERGE_REQUEST_LAST_BUILD_STARTED`, `MERGE_REQUEST_LAST_EDITED`, `MERGE_REQUEST_MERGED`, `MERGE_REQUEST_REVIEWER_FIRST_ASSIGNED`, `MERGE_REQUEST_PLAN_STAGE_START`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#start_event_identifier ValueStreamAnalytics#start_event_identifier}

---

##### `start_event_label_id`<sup>Optional</sup> <a name="start_event_label_id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.startEventLabelId"></a>

```python
start_event_label_id: str
```

- *Type:* str

Label ID associated with the start event identifier. In the format of `gid://gitlab/GroupLabel/<id>` or `gid://gitlab/ProjectLabel/<id>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#start_event_label_id ValueStreamAnalytics#start_event_label_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ValueStreamAnalyticsStagesList <a name="ValueStreamAnalyticsStagesList" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import value_stream_analytics

valueStreamAnalytics.ValueStreamAnalyticsStagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ValueStreamAnalyticsStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ValueStreamAnalyticsStages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>]]

---


### ValueStreamAnalyticsStagesOutputReference <a name="ValueStreamAnalyticsStagesOutputReference" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import value_stream_analytics

valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetCustom">reset_custom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetEndEventIdentifier">reset_end_event_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetEndEventLabelId">reset_end_event_label_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetHidden">reset_hidden</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetStartEventIdentifier">reset_start_event_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetStartEventLabelId">reset_start_event_label_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom` <a name="reset_custom" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetCustom"></a>

```python
def reset_custom() -> None
```

##### `reset_end_event_identifier` <a name="reset_end_event_identifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetEndEventIdentifier"></a>

```python
def reset_end_event_identifier() -> None
```

##### `reset_end_event_label_id` <a name="reset_end_event_label_id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetEndEventLabelId"></a>

```python
def reset_end_event_label_id() -> None
```

##### `reset_hidden` <a name="reset_hidden" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetHidden"></a>

```python
def reset_hidden() -> None
```

##### `reset_start_event_identifier` <a name="reset_start_event_identifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetStartEventIdentifier"></a>

```python
def reset_start_event_identifier() -> None
```

##### `reset_start_event_label_id` <a name="reset_start_event_label_id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetStartEventLabelId"></a>

```python
def reset_start_event_label_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.customInput">custom_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventIdentifierInput">end_event_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventLabelIdInput">end_event_label_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.hiddenInput">hidden_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventIdentifierInput">start_event_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventLabelIdInput">start_event_label_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.custom">custom</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventIdentifier">end_event_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventLabelId">end_event_label_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.hidden">hidden</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventIdentifier">start_event_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventLabelId">start_event_label_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `custom_input`<sup>Optional</sup> <a name="custom_input" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.customInput"></a>

```python
custom_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `end_event_identifier_input`<sup>Optional</sup> <a name="end_event_identifier_input" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventIdentifierInput"></a>

```python
end_event_identifier_input: str
```

- *Type:* str

---

##### `end_event_label_id_input`<sup>Optional</sup> <a name="end_event_label_id_input" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventLabelIdInput"></a>

```python
end_event_label_id_input: str
```

- *Type:* str

---

##### `hidden_input`<sup>Optional</sup> <a name="hidden_input" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.hiddenInput"></a>

```python
hidden_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `start_event_identifier_input`<sup>Optional</sup> <a name="start_event_identifier_input" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventIdentifierInput"></a>

```python
start_event_identifier_input: str
```

- *Type:* str

---

##### `start_event_label_id_input`<sup>Optional</sup> <a name="start_event_label_id_input" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventLabelIdInput"></a>

```python
start_event_label_id_input: str
```

- *Type:* str

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.custom"></a>

```python
custom: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `end_event_identifier`<sup>Required</sup> <a name="end_event_identifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventIdentifier"></a>

```python
end_event_identifier: str
```

- *Type:* str

---

##### `end_event_label_id`<sup>Required</sup> <a name="end_event_label_id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventLabelId"></a>

```python
end_event_label_id: str
```

- *Type:* str

---

##### `hidden`<sup>Required</sup> <a name="hidden" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.hidden"></a>

```python
hidden: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `start_event_identifier`<sup>Required</sup> <a name="start_event_identifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventIdentifier"></a>

```python
start_event_identifier: str
```

- *Type:* str

---

##### `start_event_label_id`<sup>Required</sup> <a name="start_event_label_id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventLabelId"></a>

```python
start_event_label_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ValueStreamAnalyticsStages]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages">ValueStreamAnalyticsStages</a>]

---



