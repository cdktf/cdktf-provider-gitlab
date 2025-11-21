# `release` Submodule <a name="`release` Submodule" id="@cdktf/provider-gitlab.release"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Release <a name="Release" id="@cdktf/provider-gitlab.release.Release"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/release gitlab_release}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.release.Release.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import release

release.Release(
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
  tag_name: str,
  assets: ReleaseAssets = None,
  description: str = None,
  milestones: typing.List[str] = None,
  name: str = None,
  ref: str = None,
  released_at: str = None,
  tag_message: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.release.Release.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.release.Release.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.release.Release.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID or full path of the project. |
| <code><a href="#@cdktf/provider-gitlab.release.Release.Initializer.parameter.tagName">tag_name</a></code> | <code>str</code> | The tag where the release is created from. |
| <code><a href="#@cdktf/provider-gitlab.release.Release.Initializer.parameter.assets">assets</a></code> | <code><a href="#@cdktf/provider-gitlab.release.ReleaseAssets">ReleaseAssets</a></code> | The release assets. |
| <code><a href="#@cdktf/provider-gitlab.release.Release.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the release. You can use Markdown. |
| <code><a href="#@cdktf/provider-gitlab.release.Release.Initializer.parameter.milestones">milestones</a></code> | <code>typing.List[str]</code> | The title of each milestone the release is associated with. GitLab Premium customers can specify group milestones. |
| <code><a href="#@cdktf/provider-gitlab.release.Release.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the release. |
| <code><a href="#@cdktf/provider-gitlab.release.Release.Initializer.parameter.ref">ref</a></code> | <code>str</code> | If a tag specified in tag_name doesn't exist, the release is created from ref and tagged with tag_name. |
| <code><a href="#@cdktf/provider-gitlab.release.Release.Initializer.parameter.releasedAt">released_at</a></code> | <code>str</code> | Date and time for the release. |
| <code><a href="#@cdktf/provider-gitlab.release.Release.Initializer.parameter.tagMessage">tag_message</a></code> | <code>str</code> | Message to use if creating a new annotated tag. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.release.Release.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.release.Release.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.release.Release.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.release.Release.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.release.Release.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.release.Release.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.release.Release.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.release.Release.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.release.Release.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.release.Release.Initializer.parameter.project"></a>

- *Type:* str

The ID or full path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/release#project Release#project}

---

##### `tag_name`<sup>Required</sup> <a name="tag_name" id="@cdktf/provider-gitlab.release.Release.Initializer.parameter.tagName"></a>

- *Type:* str

The tag where the release is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/release#tag_name Release#tag_name}

---

##### `assets`<sup>Optional</sup> <a name="assets" id="@cdktf/provider-gitlab.release.Release.Initializer.parameter.assets"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.release.ReleaseAssets">ReleaseAssets</a>

The release assets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/release#assets Release#assets}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.release.Release.Initializer.parameter.description"></a>

- *Type:* str

The description of the release. You can use Markdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/release#description Release#description}

---

##### `milestones`<sup>Optional</sup> <a name="milestones" id="@cdktf/provider-gitlab.release.Release.Initializer.parameter.milestones"></a>

- *Type:* typing.List[str]

The title of each milestone the release is associated with. GitLab Premium customers can specify group milestones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/release#milestones Release#milestones}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-gitlab.release.Release.Initializer.parameter.name"></a>

- *Type:* str

The name of the release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/release#name Release#name}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktf/provider-gitlab.release.Release.Initializer.parameter.ref"></a>

- *Type:* str

If a tag specified in tag_name doesn't exist, the release is created from ref and tagged with tag_name.

It can be a commit SHA, another tag name, or a branch name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/release#ref Release#ref}

---

##### `released_at`<sup>Optional</sup> <a name="released_at" id="@cdktf/provider-gitlab.release.Release.Initializer.parameter.releasedAt"></a>

- *Type:* str

Date and time for the release.

Defaults to the current time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). Only provide this field if creating an upcoming or historical release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/release#released_at Release#released_at}

---

##### `tag_message`<sup>Optional</sup> <a name="tag_message" id="@cdktf/provider-gitlab.release.Release.Initializer.parameter.tagMessage"></a>

- *Type:* str

Message to use if creating a new annotated tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/release#tag_message Release#tag_message}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.release.Release.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.release.Release.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.release.Release.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.release.Release.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.release.Release.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.release.Release.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.release.Release.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.release.Release.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.release.Release.putAssets">put_assets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.resetAssets">reset_assets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.resetMilestones">reset_milestones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.resetRef">reset_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.resetReleasedAt">reset_released_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.resetTagMessage">reset_tag_message</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.release.Release.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.release.Release.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.release.Release.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.release.Release.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.release.Release.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.release.Release.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.release.Release.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.release.Release.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.release.Release.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.release.Release.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.release.Release.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.release.Release.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.release.Release.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.Release.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.release.Release.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.Release.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.release.Release.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.Release.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.release.Release.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.Release.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.release.Release.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.Release.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.release.Release.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.Release.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.release.Release.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.Release.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.release.Release.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.Release.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.release.Release.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.Release.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.release.Release.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.release.Release.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.release.Release.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.release.Release.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.release.Release.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.Release.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.release.Release.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.release.Release.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.release.Release.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.release.Release.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.release.Release.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.release.Release.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.release.Release.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_assets` <a name="put_assets" id="@cdktf/provider-gitlab.release.Release.putAssets"></a>

```python
def put_assets() -> None
```

##### `reset_assets` <a name="reset_assets" id="@cdktf/provider-gitlab.release.Release.resetAssets"></a>

```python
def reset_assets() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-gitlab.release.Release.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_milestones` <a name="reset_milestones" id="@cdktf/provider-gitlab.release.Release.resetMilestones"></a>

```python
def reset_milestones() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-gitlab.release.Release.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_ref` <a name="reset_ref" id="@cdktf/provider-gitlab.release.Release.resetRef"></a>

```python
def reset_ref() -> None
```

##### `reset_released_at` <a name="reset_released_at" id="@cdktf/provider-gitlab.release.Release.resetReleasedAt"></a>

```python
def reset_released_at() -> None
```

##### `reset_tag_message` <a name="reset_tag_message" id="@cdktf/provider-gitlab.release.Release.resetTagMessage"></a>

```python
def reset_tag_message() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.release.Release.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.release.Release.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Release resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.release.Release.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import release

release.Release.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.release.Release.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.release.Release.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import release

release.Release.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.release.Release.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.release.Release.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import release

release.Release.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.release.Release.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.release.Release.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import release

release.Release.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Release resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.release.Release.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.release.Release.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Release to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.release.Release.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Release that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/release#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.release.Release.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Release to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.assets">assets</a></code> | <code><a href="#@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference">ReleaseAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.author">author</a></code> | <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference">ReleaseAuthorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.commit">commit</a></code> | <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference">ReleaseCommitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.commitPath">commit_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.descriptionHtml">description_html</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.links">links</a></code> | <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference">ReleaseLinksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.tagPath">tag_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.upcomingRelease">upcoming_release</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.assetsInput">assets_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.release.ReleaseAssets">ReleaseAssets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.milestonesInput">milestones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.refInput">ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.releasedAtInput">released_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.tagMessageInput">tag_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.tagNameInput">tag_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.milestones">milestones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.releasedAt">released_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.tagMessage">tag_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.tagName">tag_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.release.Release.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.release.Release.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.release.Release.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.release.Release.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.release.Release.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.release.Release.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.release.Release.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.release.Release.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.release.Release.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.release.Release.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.release.Release.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.release.Release.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.release.Release.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.release.Release.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `assets`<sup>Required</sup> <a name="assets" id="@cdktf/provider-gitlab.release.Release.property.assets"></a>

```python
assets: ReleaseAssetsOutputReference
```

- *Type:* <a href="#@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference">ReleaseAssetsOutputReference</a>

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktf/provider-gitlab.release.Release.property.author"></a>

```python
author: ReleaseAuthorOutputReference
```

- *Type:* <a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference">ReleaseAuthorOutputReference</a>

---

##### `commit`<sup>Required</sup> <a name="commit" id="@cdktf/provider-gitlab.release.Release.property.commit"></a>

```python
commit: ReleaseCommitOutputReference
```

- *Type:* <a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference">ReleaseCommitOutputReference</a>

---

##### `commit_path`<sup>Required</sup> <a name="commit_path" id="@cdktf/provider-gitlab.release.Release.property.commitPath"></a>

```python
commit_path: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.release.Release.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description_html`<sup>Required</sup> <a name="description_html" id="@cdktf/provider-gitlab.release.Release.property.descriptionHtml"></a>

```python
description_html: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.release.Release.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-gitlab.release.Release.property.links"></a>

```python
links: ReleaseLinksOutputReference
```

- *Type:* <a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference">ReleaseLinksOutputReference</a>

---

##### `tag_path`<sup>Required</sup> <a name="tag_path" id="@cdktf/provider-gitlab.release.Release.property.tagPath"></a>

```python
tag_path: str
```

- *Type:* str

---

##### `upcoming_release`<sup>Required</sup> <a name="upcoming_release" id="@cdktf/provider-gitlab.release.Release.property.upcomingRelease"></a>

```python
upcoming_release: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `assets_input`<sup>Optional</sup> <a name="assets_input" id="@cdktf/provider-gitlab.release.Release.property.assetsInput"></a>

```python
assets_input: IResolvable | ReleaseAssets
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.release.ReleaseAssets">ReleaseAssets</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-gitlab.release.Release.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `milestones_input`<sup>Optional</sup> <a name="milestones_input" id="@cdktf/provider-gitlab.release.Release.property.milestonesInput"></a>

```python
milestones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-gitlab.release.Release.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.release.Release.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `ref_input`<sup>Optional</sup> <a name="ref_input" id="@cdktf/provider-gitlab.release.Release.property.refInput"></a>

```python
ref_input: str
```

- *Type:* str

---

##### `released_at_input`<sup>Optional</sup> <a name="released_at_input" id="@cdktf/provider-gitlab.release.Release.property.releasedAtInput"></a>

```python
released_at_input: str
```

- *Type:* str

---

##### `tag_message_input`<sup>Optional</sup> <a name="tag_message_input" id="@cdktf/provider-gitlab.release.Release.property.tagMessageInput"></a>

```python
tag_message_input: str
```

- *Type:* str

---

##### `tag_name_input`<sup>Optional</sup> <a name="tag_name_input" id="@cdktf/provider-gitlab.release.Release.property.tagNameInput"></a>

```python
tag_name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.release.Release.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `milestones`<sup>Required</sup> <a name="milestones" id="@cdktf/provider-gitlab.release.Release.property.milestones"></a>

```python
milestones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.release.Release.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.release.Release.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.release.Release.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `released_at`<sup>Required</sup> <a name="released_at" id="@cdktf/provider-gitlab.release.Release.property.releasedAt"></a>

```python
released_at: str
```

- *Type:* str

---

##### `tag_message`<sup>Required</sup> <a name="tag_message" id="@cdktf/provider-gitlab.release.Release.property.tagMessage"></a>

```python
tag_message: str
```

- *Type:* str

---

##### `tag_name`<sup>Required</sup> <a name="tag_name" id="@cdktf/provider-gitlab.release.Release.property.tagName"></a>

```python
tag_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.release.Release.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.release.Release.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ReleaseAssets <a name="ReleaseAssets" id="@cdktf/provider-gitlab.release.ReleaseAssets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.release.ReleaseAssets.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import release

release.ReleaseAssets()
```


### ReleaseAuthor <a name="ReleaseAuthor" id="@cdktf/provider-gitlab.release.ReleaseAuthor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.release.ReleaseAuthor.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import release

release.ReleaseAuthor()
```


### ReleaseCommit <a name="ReleaseCommit" id="@cdktf/provider-gitlab.release.ReleaseCommit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.release.ReleaseCommit.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import release

release.ReleaseCommit()
```


### ReleaseConfig <a name="ReleaseConfig" id="@cdktf/provider-gitlab.release.ReleaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.release.ReleaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import release

release.ReleaseConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  project: str,
  tag_name: str,
  assets: ReleaseAssets = None,
  description: str = None,
  milestones: typing.List[str] = None,
  name: str = None,
  ref: str = None,
  released_at: str = None,
  tag_message: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseConfig.property.project">project</a></code> | <code>str</code> | The ID or full path of the project. |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseConfig.property.tagName">tag_name</a></code> | <code>str</code> | The tag where the release is created from. |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseConfig.property.assets">assets</a></code> | <code><a href="#@cdktf/provider-gitlab.release.ReleaseAssets">ReleaseAssets</a></code> | The release assets. |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseConfig.property.description">description</a></code> | <code>str</code> | The description of the release. You can use Markdown. |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseConfig.property.milestones">milestones</a></code> | <code>typing.List[str]</code> | The title of each milestone the release is associated with. GitLab Premium customers can specify group milestones. |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseConfig.property.name">name</a></code> | <code>str</code> | The name of the release. |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseConfig.property.ref">ref</a></code> | <code>str</code> | If a tag specified in tag_name doesn't exist, the release is created from ref and tagged with tag_name. |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseConfig.property.releasedAt">released_at</a></code> | <code>str</code> | Date and time for the release. |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseConfig.property.tagMessage">tag_message</a></code> | <code>str</code> | Message to use if creating a new annotated tag. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.release.ReleaseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.release.ReleaseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.release.ReleaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.release.ReleaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.release.ReleaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.release.ReleaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.release.ReleaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.release.ReleaseConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID or full path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/release#project Release#project}

---

##### `tag_name`<sup>Required</sup> <a name="tag_name" id="@cdktf/provider-gitlab.release.ReleaseConfig.property.tagName"></a>

```python
tag_name: str
```

- *Type:* str

The tag where the release is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/release#tag_name Release#tag_name}

---

##### `assets`<sup>Optional</sup> <a name="assets" id="@cdktf/provider-gitlab.release.ReleaseConfig.property.assets"></a>

```python
assets: ReleaseAssets
```

- *Type:* <a href="#@cdktf/provider-gitlab.release.ReleaseAssets">ReleaseAssets</a>

The release assets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/release#assets Release#assets}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.release.ReleaseConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the release. You can use Markdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/release#description Release#description}

---

##### `milestones`<sup>Optional</sup> <a name="milestones" id="@cdktf/provider-gitlab.release.ReleaseConfig.property.milestones"></a>

```python
milestones: typing.List[str]
```

- *Type:* typing.List[str]

The title of each milestone the release is associated with. GitLab Premium customers can specify group milestones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/release#milestones Release#milestones}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-gitlab.release.ReleaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/release#name Release#name}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktf/provider-gitlab.release.ReleaseConfig.property.ref"></a>

```python
ref: str
```

- *Type:* str

If a tag specified in tag_name doesn't exist, the release is created from ref and tagged with tag_name.

It can be a commit SHA, another tag name, or a branch name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/release#ref Release#ref}

---

##### `released_at`<sup>Optional</sup> <a name="released_at" id="@cdktf/provider-gitlab.release.ReleaseConfig.property.releasedAt"></a>

```python
released_at: str
```

- *Type:* str

Date and time for the release.

Defaults to the current time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). Only provide this field if creating an upcoming or historical release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/release#released_at Release#released_at}

---

##### `tag_message`<sup>Optional</sup> <a name="tag_message" id="@cdktf/provider-gitlab.release.ReleaseConfig.property.tagMessage"></a>

```python
tag_message: str
```

- *Type:* str

Message to use if creating a new annotated tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/release#tag_message Release#tag_message}

---

### ReleaseLinks <a name="ReleaseLinks" id="@cdktf/provider-gitlab.release.ReleaseLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.release.ReleaseLinks.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import release

release.ReleaseLinks()
```


## Classes <a name="Classes" id="Classes"></a>

### ReleaseAssetsOutputReference <a name="ReleaseAssetsOutputReference" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import release

release.ReleaseAssetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.release.ReleaseAssets">ReleaseAssets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.release.ReleaseAssetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ReleaseAssets
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.release.ReleaseAssets">ReleaseAssets</a>

---


### ReleaseAuthorOutputReference <a name="ReleaseAuthorOutputReference" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import release

release.ReleaseAuthorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.property.avatarUrl">avatar_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.property.webUrl">web_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.release.ReleaseAuthor">ReleaseAuthor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avatar_url`<sup>Required</sup> <a name="avatar_url" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.property.avatarUrl"></a>

```python
avatar_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `web_url`<sup>Required</sup> <a name="web_url" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.property.webUrl"></a>

```python
web_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.release.ReleaseAuthorOutputReference.property.internalValue"></a>

```python
internal_value: ReleaseAuthor
```

- *Type:* <a href="#@cdktf/provider-gitlab.release.ReleaseAuthor">ReleaseAuthor</a>

---


### ReleaseCommitOutputReference <a name="ReleaseCommitOutputReference" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import release

release.ReleaseCommitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.authoredDate">authored_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.authorEmail">author_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.authorName">author_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.committedDate">committed_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.committerEmail">committer_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.committerName">committer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.parentIds">parent_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.shortId">short_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.release.ReleaseCommit">ReleaseCommit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authored_date`<sup>Required</sup> <a name="authored_date" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.authoredDate"></a>

```python
authored_date: str
```

- *Type:* str

---

##### `author_email`<sup>Required</sup> <a name="author_email" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.authorEmail"></a>

```python
author_email: str
```

- *Type:* str

---

##### `author_name`<sup>Required</sup> <a name="author_name" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.authorName"></a>

```python
author_name: str
```

- *Type:* str

---

##### `committed_date`<sup>Required</sup> <a name="committed_date" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.committedDate"></a>

```python
committed_date: str
```

- *Type:* str

---

##### `committer_email`<sup>Required</sup> <a name="committer_email" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.committerEmail"></a>

```python
committer_email: str
```

- *Type:* str

---

##### `committer_name`<sup>Required</sup> <a name="committer_name" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.committerName"></a>

```python
committer_name: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `parent_ids`<sup>Required</sup> <a name="parent_ids" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.parentIds"></a>

```python
parent_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `short_id`<sup>Required</sup> <a name="short_id" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.shortId"></a>

```python
short_id: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.release.ReleaseCommitOutputReference.property.internalValue"></a>

```python
internal_value: ReleaseCommit
```

- *Type:* <a href="#@cdktf/provider-gitlab.release.ReleaseCommit">ReleaseCommit</a>

---


### ReleaseLinksOutputReference <a name="ReleaseLinksOutputReference" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import release

release.ReleaseLinksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.property.closedIssuesUrl">closed_issues_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.property.closedMergeRequestsUrl">closed_merge_requests_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.property.editUrl">edit_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.property.mergedMergeRequestsUrl">merged_merge_requests_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.property.openedIssuesUrl">opened_issues_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.property.openedMergeRequestsUrl">opened_merge_requests_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.property.selfAttribute">self_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.release.ReleaseLinks">ReleaseLinks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `closed_issues_url`<sup>Required</sup> <a name="closed_issues_url" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.property.closedIssuesUrl"></a>

```python
closed_issues_url: str
```

- *Type:* str

---

##### `closed_merge_requests_url`<sup>Required</sup> <a name="closed_merge_requests_url" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.property.closedMergeRequestsUrl"></a>

```python
closed_merge_requests_url: str
```

- *Type:* str

---

##### `edit_url`<sup>Required</sup> <a name="edit_url" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.property.editUrl"></a>

```python
edit_url: str
```

- *Type:* str

---

##### `merged_merge_requests_url`<sup>Required</sup> <a name="merged_merge_requests_url" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.property.mergedMergeRequestsUrl"></a>

```python
merged_merge_requests_url: str
```

- *Type:* str

---

##### `opened_issues_url`<sup>Required</sup> <a name="opened_issues_url" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.property.openedIssuesUrl"></a>

```python
opened_issues_url: str
```

- *Type:* str

---

##### `opened_merge_requests_url`<sup>Required</sup> <a name="opened_merge_requests_url" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.property.openedMergeRequestsUrl"></a>

```python
opened_merge_requests_url: str
```

- *Type:* str

---

##### `self_attribute`<sup>Required</sup> <a name="self_attribute" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.property.selfAttribute"></a>

```python
self_attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.release.ReleaseLinksOutputReference.property.internalValue"></a>

```python
internal_value: ReleaseLinks
```

- *Type:* <a href="#@cdktf/provider-gitlab.release.ReleaseLinks">ReleaseLinks</a>

---



