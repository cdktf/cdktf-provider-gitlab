# `userRunner` Submodule <a name="`userRunner` Submodule" id="@cdktf/provider-gitlab.userRunner"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserRunner <a name="UserRunner" id="@cdktf/provider-gitlab.userRunner.UserRunner"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user_runner gitlab_user_runner}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import user_runner

userRunner.UserRunner(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  runner_type: str,
  access_level: str = None,
  description: str = None,
  group_id: typing.Union[int, float] = None,
  locked: typing.Union[bool, IResolvable] = None,
  maximum_timeout: typing.Union[int, float] = None,
  paused: typing.Union[bool, IResolvable] = None,
  project_id: typing.Union[int, float] = None,
  tag_list: typing.List[str] = None,
  untagged: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.runnerType">runner_type</a></code> | <code>str</code> | The scope of the runner. Valid values are: `instance_type`, `group_type`, `project_type`. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | The access level of the runner. Valid values are: `not_protected`, `ref_protected`. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the runner. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the group that the runner is created in. Required if runner_type is group_type. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.locked">locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if the runner should be locked for the current project. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.maximumTimeout">maximum_timeout</a></code> | <code>typing.Union[int, float]</code> | Maximum timeout that limits the amount of time (in seconds) that runners can run jobs. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.paused">paused</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if the runner should ignore new jobs. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.projectId">project_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the project that the runner is created in. Required if runner_type is project_type. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.tagList">tag_list</a></code> | <code>typing.List[str]</code> | A list of runner tags. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.untagged">untagged</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if the runner should handle untagged jobs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `runner_type`<sup>Required</sup> <a name="runner_type" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.runnerType"></a>

- *Type:* str

The scope of the runner. Valid values are: `instance_type`, `group_type`, `project_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user_runner#runner_type UserRunner#runner_type}

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.accessLevel"></a>

- *Type:* str

The access level of the runner. Valid values are: `not_protected`, `ref_protected`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user_runner#access_level UserRunner#access_level}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.description"></a>

- *Type:* str

Description of the runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user_runner#description UserRunner#description}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.groupId"></a>

- *Type:* typing.Union[int, float]

The ID of the group that the runner is created in. Required if runner_type is group_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user_runner#group_id UserRunner#group_id}

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.locked"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if the runner should be locked for the current project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user_runner#locked UserRunner#locked}

---

##### `maximum_timeout`<sup>Optional</sup> <a name="maximum_timeout" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.maximumTimeout"></a>

- *Type:* typing.Union[int, float]

Maximum timeout that limits the amount of time (in seconds) that runners can run jobs.

Must be at least 600 (10 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user_runner#maximum_timeout UserRunner#maximum_timeout}

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.paused"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if the runner should ignore new jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user_runner#paused UserRunner#paused}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.projectId"></a>

- *Type:* typing.Union[int, float]

The ID of the project that the runner is created in. Required if runner_type is project_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user_runner#project_id UserRunner#project_id}

---

##### `tag_list`<sup>Optional</sup> <a name="tag_list" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.tagList"></a>

- *Type:* typing.List[str]

A list of runner tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user_runner#tag_list UserRunner#tag_list}

---

##### `untagged`<sup>Optional</sup> <a name="untagged" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.untagged"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if the runner should handle untagged jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user_runner#untagged UserRunner#untagged}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetLocked">reset_locked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetMaximumTimeout">reset_maximum_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetPaused">reset_paused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetTagList">reset_tag_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetUntagged">reset_untagged</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.userRunner.UserRunner.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.userRunner.UserRunner.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.userRunner.UserRunner.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.userRunner.UserRunner.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.userRunner.UserRunner.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.userRunner.UserRunner.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.userRunner.UserRunner.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.userRunner.UserRunner.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.userRunner.UserRunner.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.userRunner.UserRunner.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.userRunner.UserRunner.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.userRunner.UserRunner.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.userRunner.UserRunner.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.userRunner.UserRunner.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.userRunner.UserRunner.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.userRunner.UserRunner.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.userRunner.UserRunner.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.userRunner.UserRunner.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.userRunner.UserRunner.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.userRunner.UserRunner.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.userRunner.UserRunner.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_access_level` <a name="reset_access_level" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_group_id` <a name="reset_group_id" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_locked` <a name="reset_locked" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetLocked"></a>

```python
def reset_locked() -> None
```

##### `reset_maximum_timeout` <a name="reset_maximum_timeout" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetMaximumTimeout"></a>

```python
def reset_maximum_timeout() -> None
```

##### `reset_paused` <a name="reset_paused" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetPaused"></a>

```python
def reset_paused() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_tag_list` <a name="reset_tag_list" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetTagList"></a>

```python
def reset_tag_list() -> None
```

##### `reset_untagged` <a name="reset_untagged" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetUntagged"></a>

```python
def reset_untagged() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a UserRunner resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.userRunner.UserRunner.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import user_runner

userRunner.UserRunner.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.userRunner.UserRunner.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.userRunner.UserRunner.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import user_runner

userRunner.UserRunner.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.userRunner.UserRunner.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.userRunner.UserRunner.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import user_runner

userRunner.UserRunner.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.userRunner.UserRunner.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.userRunner.UserRunner.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import user_runner

userRunner.UserRunner.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a UserRunner resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.userRunner.UserRunner.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.userRunner.UserRunner.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the UserRunner to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.userRunner.UserRunner.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing UserRunner that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user_runner#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.userRunner.UserRunner.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the UserRunner to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.groupIdInput">group_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.lockedInput">locked_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.maximumTimeoutInput">maximum_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.pausedInput">paused_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.projectIdInput">project_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.runnerTypeInput">runner_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.tagListInput">tag_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.untaggedInput">untagged_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.locked">locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.maximumTimeout">maximum_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.paused">paused</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.projectId">project_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.runnerType">runner_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.tagList">tag_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.untagged">untagged</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.groupIdInput"></a>

```python
group_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `locked_input`<sup>Optional</sup> <a name="locked_input" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.lockedInput"></a>

```python
locked_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maximum_timeout_input`<sup>Optional</sup> <a name="maximum_timeout_input" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.maximumTimeoutInput"></a>

```python
maximum_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `paused_input`<sup>Optional</sup> <a name="paused_input" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.pausedInput"></a>

```python
paused_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.projectIdInput"></a>

```python
project_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `runner_type_input`<sup>Optional</sup> <a name="runner_type_input" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.runnerTypeInput"></a>

```python
runner_type_input: str
```

- *Type:* str

---

##### `tag_list_input`<sup>Optional</sup> <a name="tag_list_input" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.tagListInput"></a>

```python
tag_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `untagged_input`<sup>Optional</sup> <a name="untagged_input" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.untaggedInput"></a>

```python
untagged_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.locked"></a>

```python
locked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maximum_timeout`<sup>Required</sup> <a name="maximum_timeout" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.maximumTimeout"></a>

```python
maximum_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.paused"></a>

```python
paused: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.projectId"></a>

```python
project_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `runner_type`<sup>Required</sup> <a name="runner_type" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.runnerType"></a>

```python
runner_type: str
```

- *Type:* str

---

##### `tag_list`<sup>Required</sup> <a name="tag_list" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.tagList"></a>

```python
tag_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `untagged`<sup>Required</sup> <a name="untagged" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.untagged"></a>

```python
untagged: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UserRunnerConfig <a name="UserRunnerConfig" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import user_runner

userRunner.UserRunnerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  runner_type: str,
  access_level: str = None,
  description: str = None,
  group_id: typing.Union[int, float] = None,
  locked: typing.Union[bool, IResolvable] = None,
  maximum_timeout: typing.Union[int, float] = None,
  paused: typing.Union[bool, IResolvable] = None,
  project_id: typing.Union[int, float] = None,
  tag_list: typing.List[str] = None,
  untagged: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.runnerType">runner_type</a></code> | <code>str</code> | The scope of the runner. Valid values are: `instance_type`, `group_type`, `project_type`. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.accessLevel">access_level</a></code> | <code>str</code> | The access level of the runner. Valid values are: `not_protected`, `ref_protected`. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.description">description</a></code> | <code>str</code> | Description of the runner. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the group that the runner is created in. Required if runner_type is group_type. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.locked">locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if the runner should be locked for the current project. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.maximumTimeout">maximum_timeout</a></code> | <code>typing.Union[int, float]</code> | Maximum timeout that limits the amount of time (in seconds) that runners can run jobs. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.paused">paused</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if the runner should ignore new jobs. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.projectId">project_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the project that the runner is created in. Required if runner_type is project_type. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.tagList">tag_list</a></code> | <code>typing.List[str]</code> | A list of runner tags. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.untagged">untagged</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if the runner should handle untagged jobs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `runner_type`<sup>Required</sup> <a name="runner_type" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.runnerType"></a>

```python
runner_type: str
```

- *Type:* str

The scope of the runner. Valid values are: `instance_type`, `group_type`, `project_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user_runner#runner_type UserRunner#runner_type}

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

The access level of the runner. Valid values are: `not_protected`, `ref_protected`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user_runner#access_level UserRunner#access_level}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user_runner#description UserRunner#description}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the group that the runner is created in. Required if runner_type is group_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user_runner#group_id UserRunner#group_id}

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.locked"></a>

```python
locked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if the runner should be locked for the current project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user_runner#locked UserRunner#locked}

---

##### `maximum_timeout`<sup>Optional</sup> <a name="maximum_timeout" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.maximumTimeout"></a>

```python
maximum_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum timeout that limits the amount of time (in seconds) that runners can run jobs.

Must be at least 600 (10 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user_runner#maximum_timeout UserRunner#maximum_timeout}

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.paused"></a>

```python
paused: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if the runner should ignore new jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user_runner#paused UserRunner#paused}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.projectId"></a>

```python
project_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the project that the runner is created in. Required if runner_type is project_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user_runner#project_id UserRunner#project_id}

---

##### `tag_list`<sup>Optional</sup> <a name="tag_list" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.tagList"></a>

```python
tag_list: typing.List[str]
```

- *Type:* typing.List[str]

A list of runner tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user_runner#tag_list UserRunner#tag_list}

---

##### `untagged`<sup>Optional</sup> <a name="untagged" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.untagged"></a>

```python
untagged: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if the runner should handle untagged jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/user_runner#untagged UserRunner#untagged}

---



