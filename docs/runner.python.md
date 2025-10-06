# `runner` Submodule <a name="`runner` Submodule" id="@cdktf/provider-gitlab.runner"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Runner <a name="Runner" id="@cdktf/provider-gitlab.runner.Runner"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/runner gitlab_runner}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.runner.Runner.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import runner

runner.Runner(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  registration_token: str,
  access_level: str = None,
  description: str = None,
  id: str = None,
  locked: bool | IResolvable = None,
  maintenance_note: str = None,
  maximum_timeout: typing.Union[int, float] = None,
  paused: bool | IResolvable = None,
  run_untagged: bool | IResolvable = None,
  tag_list: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.registrationToken">registration_token</a></code> | <code>str</code> | The registration token used to register the runner. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | The access_level of the runner. Valid values are: `not_protected`, `ref_protected`. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.description">description</a></code> | <code>str</code> | The runner's description. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/runner#id Runner#id}. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.locked">locked</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the runner should be locked for current project. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.maintenanceNote">maintenance_note</a></code> | <code>str</code> | Free-form maintenance notes for the runner (1024 characters). |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.maximumTimeout">maximum_timeout</a></code> | <code>typing.Union[int, float]</code> | Maximum timeout set when this runner handles the job. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.paused">paused</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the runner should ignore new jobs. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.runUntagged">run_untagged</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the runner should handle untagged jobs. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.tagList">tag_list</a></code> | <code>typing.List[str]</code> | List of runner’s tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `registration_token`<sup>Required</sup> <a name="registration_token" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.registrationToken"></a>

- *Type:* str

The registration token used to register the runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/runner#registration_token Runner#registration_token}

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.accessLevel"></a>

- *Type:* str

The access_level of the runner. Valid values are: `not_protected`, `ref_protected`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/runner#access_level Runner#access_level}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.description"></a>

- *Type:* str

The runner's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/runner#description Runner#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/runner#id Runner#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.locked"></a>

- *Type:* bool | cdktf.IResolvable

Whether the runner should be locked for current project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/runner#locked Runner#locked}

---

##### `maintenance_note`<sup>Optional</sup> <a name="maintenance_note" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.maintenanceNote"></a>

- *Type:* str

Free-form maintenance notes for the runner (1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/runner#maintenance_note Runner#maintenance_note}

---

##### `maximum_timeout`<sup>Optional</sup> <a name="maximum_timeout" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.maximumTimeout"></a>

- *Type:* typing.Union[int, float]

Maximum timeout set when this runner handles the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/runner#maximum_timeout Runner#maximum_timeout}

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.paused"></a>

- *Type:* bool | cdktf.IResolvable

Whether the runner should ignore new jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/runner#paused Runner#paused}

---

##### `run_untagged`<sup>Optional</sup> <a name="run_untagged" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.runUntagged"></a>

- *Type:* bool | cdktf.IResolvable

Whether the runner should handle untagged jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/runner#run_untagged Runner#run_untagged}

---

##### `tag_list`<sup>Optional</sup> <a name="tag_list" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.tagList"></a>

- *Type:* typing.List[str]

List of runner’s tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/runner#tag_list Runner#tag_list}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetLocked">reset_locked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetMaintenanceNote">reset_maintenance_note</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetMaximumTimeout">reset_maximum_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetPaused">reset_paused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetRunUntagged">reset_run_untagged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetTagList">reset_tag_list</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.runner.Runner.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.runner.Runner.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.runner.Runner.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.runner.Runner.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.runner.Runner.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.runner.Runner.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.runner.Runner.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.runner.Runner.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.runner.Runner.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.runner.Runner.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.runner.Runner.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.runner.Runner.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.runner.Runner.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.runner.Runner.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.runner.Runner.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.runner.Runner.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.runner.Runner.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.runner.Runner.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.runner.Runner.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.runner.Runner.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.runner.Runner.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.runner.Runner.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.runner.Runner.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.runner.Runner.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.runner.Runner.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.runner.Runner.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.runner.Runner.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.runner.Runner.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.runner.Runner.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.runner.Runner.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.runner.Runner.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.runner.Runner.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.runner.Runner.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.runner.Runner.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.runner.Runner.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.runner.Runner.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.runner.Runner.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.runner.Runner.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.runner.Runner.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.runner.Runner.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.runner.Runner.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.runner.Runner.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.runner.Runner.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_access_level` <a name="reset_access_level" id="@cdktf/provider-gitlab.runner.Runner.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-gitlab.runner.Runner.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.runner.Runner.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_locked` <a name="reset_locked" id="@cdktf/provider-gitlab.runner.Runner.resetLocked"></a>

```python
def reset_locked() -> None
```

##### `reset_maintenance_note` <a name="reset_maintenance_note" id="@cdktf/provider-gitlab.runner.Runner.resetMaintenanceNote"></a>

```python
def reset_maintenance_note() -> None
```

##### `reset_maximum_timeout` <a name="reset_maximum_timeout" id="@cdktf/provider-gitlab.runner.Runner.resetMaximumTimeout"></a>

```python
def reset_maximum_timeout() -> None
```

##### `reset_paused` <a name="reset_paused" id="@cdktf/provider-gitlab.runner.Runner.resetPaused"></a>

```python
def reset_paused() -> None
```

##### `reset_run_untagged` <a name="reset_run_untagged" id="@cdktf/provider-gitlab.runner.Runner.resetRunUntagged"></a>

```python
def reset_run_untagged() -> None
```

##### `reset_tag_list` <a name="reset_tag_list" id="@cdktf/provider-gitlab.runner.Runner.resetTagList"></a>

```python
def reset_tag_list() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Runner resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.runner.Runner.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import runner

runner.Runner.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.runner.Runner.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.runner.Runner.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import runner

runner.Runner.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.runner.Runner.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.runner.Runner.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import runner

runner.Runner.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.runner.Runner.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.runner.Runner.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import runner

runner.Runner.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Runner resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.runner.Runner.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.runner.Runner.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Runner to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.runner.Runner.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Runner that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/runner#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.runner.Runner.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Runner to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.authenticationToken">authentication_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.lockedInput">locked_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.maintenanceNoteInput">maintenance_note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.maximumTimeoutInput">maximum_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.pausedInput">paused_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.registrationTokenInput">registration_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.runUntaggedInput">run_untagged_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.tagListInput">tag_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.locked">locked</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.maintenanceNote">maintenance_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.maximumTimeout">maximum_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.paused">paused</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.registrationToken">registration_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.runUntagged">run_untagged</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.tagList">tag_list</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.runner.Runner.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.runner.Runner.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.runner.Runner.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.runner.Runner.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.runner.Runner.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.runner.Runner.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.runner.Runner.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.runner.Runner.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.runner.Runner.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.runner.Runner.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.runner.Runner.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.runner.Runner.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.runner.Runner.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.runner.Runner.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `authentication_token`<sup>Required</sup> <a name="authentication_token" id="@cdktf/provider-gitlab.runner.Runner.property.authenticationToken"></a>

```python
authentication_token: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-gitlab.runner.Runner.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="@cdktf/provider-gitlab.runner.Runner.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-gitlab.runner.Runner.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.runner.Runner.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `locked_input`<sup>Optional</sup> <a name="locked_input" id="@cdktf/provider-gitlab.runner.Runner.property.lockedInput"></a>

```python
locked_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `maintenance_note_input`<sup>Optional</sup> <a name="maintenance_note_input" id="@cdktf/provider-gitlab.runner.Runner.property.maintenanceNoteInput"></a>

```python
maintenance_note_input: str
```

- *Type:* str

---

##### `maximum_timeout_input`<sup>Optional</sup> <a name="maximum_timeout_input" id="@cdktf/provider-gitlab.runner.Runner.property.maximumTimeoutInput"></a>

```python
maximum_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `paused_input`<sup>Optional</sup> <a name="paused_input" id="@cdktf/provider-gitlab.runner.Runner.property.pausedInput"></a>

```python
paused_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `registration_token_input`<sup>Optional</sup> <a name="registration_token_input" id="@cdktf/provider-gitlab.runner.Runner.property.registrationTokenInput"></a>

```python
registration_token_input: str
```

- *Type:* str

---

##### `run_untagged_input`<sup>Optional</sup> <a name="run_untagged_input" id="@cdktf/provider-gitlab.runner.Runner.property.runUntaggedInput"></a>

```python
run_untagged_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tag_list_input`<sup>Optional</sup> <a name="tag_list_input" id="@cdktf/provider-gitlab.runner.Runner.property.tagListInput"></a>

```python
tag_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-gitlab.runner.Runner.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.runner.Runner.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.runner.Runner.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktf/provider-gitlab.runner.Runner.property.locked"></a>

```python
locked: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `maintenance_note`<sup>Required</sup> <a name="maintenance_note" id="@cdktf/provider-gitlab.runner.Runner.property.maintenanceNote"></a>

```python
maintenance_note: str
```

- *Type:* str

---

##### `maximum_timeout`<sup>Required</sup> <a name="maximum_timeout" id="@cdktf/provider-gitlab.runner.Runner.property.maximumTimeout"></a>

```python
maximum_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-gitlab.runner.Runner.property.paused"></a>

```python
paused: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `registration_token`<sup>Required</sup> <a name="registration_token" id="@cdktf/provider-gitlab.runner.Runner.property.registrationToken"></a>

```python
registration_token: str
```

- *Type:* str

---

##### `run_untagged`<sup>Required</sup> <a name="run_untagged" id="@cdktf/provider-gitlab.runner.Runner.property.runUntagged"></a>

```python
run_untagged: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tag_list`<sup>Required</sup> <a name="tag_list" id="@cdktf/provider-gitlab.runner.Runner.property.tagList"></a>

```python
tag_list: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.runner.Runner.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RunnerConfig <a name="RunnerConfig" id="@cdktf/provider-gitlab.runner.RunnerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.runner.RunnerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import runner

runner.RunnerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  registration_token: str,
  access_level: str = None,
  description: str = None,
  id: str = None,
  locked: bool | IResolvable = None,
  maintenance_note: str = None,
  maximum_timeout: typing.Union[int, float] = None,
  paused: bool | IResolvable = None,
  run_untagged: bool | IResolvable = None,
  tag_list: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.registrationToken">registration_token</a></code> | <code>str</code> | The registration token used to register the runner. |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.accessLevel">access_level</a></code> | <code>str</code> | The access_level of the runner. Valid values are: `not_protected`, `ref_protected`. |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.description">description</a></code> | <code>str</code> | The runner's description. |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/runner#id Runner#id}. |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.locked">locked</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the runner should be locked for current project. |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.maintenanceNote">maintenance_note</a></code> | <code>str</code> | Free-form maintenance notes for the runner (1024 characters). |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.maximumTimeout">maximum_timeout</a></code> | <code>typing.Union[int, float]</code> | Maximum timeout set when this runner handles the job. |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.paused">paused</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the runner should ignore new jobs. |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.runUntagged">run_untagged</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the runner should handle untagged jobs. |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.tagList">tag_list</a></code> | <code>typing.List[str]</code> | List of runner’s tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `registration_token`<sup>Required</sup> <a name="registration_token" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.registrationToken"></a>

```python
registration_token: str
```

- *Type:* str

The registration token used to register the runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/runner#registration_token Runner#registration_token}

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

The access_level of the runner. Valid values are: `not_protected`, `ref_protected`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/runner#access_level Runner#access_level}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The runner's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/runner#description Runner#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/runner#id Runner#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.locked"></a>

```python
locked: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether the runner should be locked for current project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/runner#locked Runner#locked}

---

##### `maintenance_note`<sup>Optional</sup> <a name="maintenance_note" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.maintenanceNote"></a>

```python
maintenance_note: str
```

- *Type:* str

Free-form maintenance notes for the runner (1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/runner#maintenance_note Runner#maintenance_note}

---

##### `maximum_timeout`<sup>Optional</sup> <a name="maximum_timeout" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.maximumTimeout"></a>

```python
maximum_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum timeout set when this runner handles the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/runner#maximum_timeout Runner#maximum_timeout}

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.paused"></a>

```python
paused: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether the runner should ignore new jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/runner#paused Runner#paused}

---

##### `run_untagged`<sup>Optional</sup> <a name="run_untagged" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.runUntagged"></a>

```python
run_untagged: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether the runner should handle untagged jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/runner#run_untagged Runner#run_untagged}

---

##### `tag_list`<sup>Optional</sup> <a name="tag_list" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.tagList"></a>

```python
tag_list: typing.List[str]
```

- *Type:* typing.List[str]

List of runner’s tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/runner#tag_list Runner#tag_list}

---



