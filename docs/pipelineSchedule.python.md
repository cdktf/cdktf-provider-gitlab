# `pipelineSchedule` Submodule <a name="`pipelineSchedule` Submodule" id="@cdktf/provider-gitlab.pipelineSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PipelineSchedule <a name="PipelineSchedule" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/pipeline_schedule gitlab_pipeline_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import pipeline_schedule

pipelineSchedule.PipelineSchedule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cron: str,
  description: str,
  project: str,
  ref: str,
  active: typing.Union[bool, IResolvable] = None,
  cron_timezone: str = None,
  take_ownership: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.cron">cron</a></code> | <code>str</code> | The cron (e.g. `0 1 * * *`). |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the pipeline schedule. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.project">project</a></code> | <code>str</code> | The name or id of the project to add the schedule to. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.ref">ref</a></code> | <code>str</code> | The branch/tag name to be triggered. This must be the full branch reference, for example: `refs/heads/main`, not `main`. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The activation of pipeline schedule. If false is set, the pipeline schedule will deactivated initially. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.cronTimezone">cron_timezone</a></code> | <code>str</code> | The timezone. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.takeOwnership">take_ownership</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to `true`, the user represented by the token running Terraform will take ownership of the scheduled pipeline prior to editing it. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.cron"></a>

- *Type:* str

The cron (e.g. `0 1 * * *`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/pipeline_schedule#cron PipelineSchedule#cron}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.description"></a>

- *Type:* str

The description of the pipeline schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/pipeline_schedule#description PipelineSchedule#description}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.project"></a>

- *Type:* str

The name or id of the project to add the schedule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/pipeline_schedule#project PipelineSchedule#project}

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.ref"></a>

- *Type:* str

The branch/tag name to be triggered. This must be the full branch reference, for example: `refs/heads/main`, not `main`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/pipeline_schedule#ref PipelineSchedule#ref}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.active"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The activation of pipeline schedule. If false is set, the pipeline schedule will deactivated initially.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/pipeline_schedule#active PipelineSchedule#active}

---

##### `cron_timezone`<sup>Optional</sup> <a name="cron_timezone" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.cronTimezone"></a>

- *Type:* str

The timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/pipeline_schedule#cron_timezone PipelineSchedule#cron_timezone}

---

##### `take_ownership`<sup>Optional</sup> <a name="take_ownership" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.takeOwnership"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to `true`, the user represented by the token running Terraform will take ownership of the scheduled pipeline prior to editing it.

This can help when managing scheduled pipeline drift when other users are making changes outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/pipeline_schedule#take_ownership PipelineSchedule#take_ownership}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.resetCronTimezone">reset_cron_timezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.resetTakeOwnership">reset_take_ownership</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_active` <a name="reset_active" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_cron_timezone` <a name="reset_cron_timezone" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.resetCronTimezone"></a>

```python
def reset_cron_timezone() -> None
```

##### `reset_take_ownership` <a name="reset_take_ownership" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.resetTakeOwnership"></a>

```python
def reset_take_ownership() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PipelineSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import pipeline_schedule

pipelineSchedule.PipelineSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import pipeline_schedule

pipelineSchedule.PipelineSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import pipeline_schedule

pipelineSchedule.PipelineSchedule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import pipeline_schedule

pipelineSchedule.PipelineSchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PipelineSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PipelineSchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PipelineSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/pipeline_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PipelineSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.owner">owner</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.pipelineScheduleId">pipeline_schedule_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.activeInput">active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cronInput">cron_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cronTimezoneInput">cron_timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.refInput">ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.takeOwnershipInput">take_ownership_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cron">cron</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cronTimezone">cron_timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.takeOwnership">take_ownership</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.owner"></a>

```python
owner: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pipeline_schedule_id`<sup>Required</sup> <a name="pipeline_schedule_id" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.pipelineScheduleId"></a>

```python
pipeline_schedule_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.activeInput"></a>

```python
active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cron_input`<sup>Optional</sup> <a name="cron_input" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cronInput"></a>

```python
cron_input: str
```

- *Type:* str

---

##### `cron_timezone_input`<sup>Optional</sup> <a name="cron_timezone_input" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cronTimezoneInput"></a>

```python
cron_timezone_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `ref_input`<sup>Optional</sup> <a name="ref_input" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.refInput"></a>

```python
ref_input: str
```

- *Type:* str

---

##### `take_ownership_input`<sup>Optional</sup> <a name="take_ownership_input" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.takeOwnershipInput"></a>

```python
take_ownership_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cron"></a>

```python
cron: str
```

- *Type:* str

---

##### `cron_timezone`<sup>Required</sup> <a name="cron_timezone" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cronTimezone"></a>

```python
cron_timezone: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `take_ownership`<sup>Required</sup> <a name="take_ownership" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.takeOwnership"></a>

```python
take_ownership: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PipelineScheduleConfig <a name="PipelineScheduleConfig" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import pipeline_schedule

pipelineSchedule.PipelineScheduleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cron: str,
  description: str,
  project: str,
  ref: str,
  active: typing.Union[bool, IResolvable] = None,
  cron_timezone: str = None,
  take_ownership: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.cron">cron</a></code> | <code>str</code> | The cron (e.g. `0 1 * * *`). |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.description">description</a></code> | <code>str</code> | The description of the pipeline schedule. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.project">project</a></code> | <code>str</code> | The name or id of the project to add the schedule to. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.ref">ref</a></code> | <code>str</code> | The branch/tag name to be triggered. This must be the full branch reference, for example: `refs/heads/main`, not `main`. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The activation of pipeline schedule. If false is set, the pipeline schedule will deactivated initially. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.cronTimezone">cron_timezone</a></code> | <code>str</code> | The timezone. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.takeOwnership">take_ownership</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to `true`, the user represented by the token running Terraform will take ownership of the scheduled pipeline prior to editing it. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.cron"></a>

```python
cron: str
```

- *Type:* str

The cron (e.g. `0 1 * * *`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/pipeline_schedule#cron PipelineSchedule#cron}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the pipeline schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/pipeline_schedule#description PipelineSchedule#description}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The name or id of the project to add the schedule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/pipeline_schedule#project PipelineSchedule#project}

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.ref"></a>

```python
ref: str
```

- *Type:* str

The branch/tag name to be triggered. This must be the full branch reference, for example: `refs/heads/main`, not `main`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/pipeline_schedule#ref PipelineSchedule#ref}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The activation of pipeline schedule. If false is set, the pipeline schedule will deactivated initially.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/pipeline_schedule#active PipelineSchedule#active}

---

##### `cron_timezone`<sup>Optional</sup> <a name="cron_timezone" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.cronTimezone"></a>

```python
cron_timezone: str
```

- *Type:* str

The timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/pipeline_schedule#cron_timezone PipelineSchedule#cron_timezone}

---

##### `take_ownership`<sup>Optional</sup> <a name="take_ownership" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.takeOwnership"></a>

```python
take_ownership: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to `true`, the user represented by the token running Terraform will take ownership of the scheduled pipeline prior to editing it.

This can help when managing scheduled pipeline drift when other users are making changes outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/pipeline_schedule#take_ownership PipelineSchedule#take_ownership}

---



