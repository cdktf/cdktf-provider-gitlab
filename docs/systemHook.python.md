# `systemHook` Submodule <a name="`systemHook` Submodule" id="@cdktf/provider-gitlab.systemHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SystemHook <a name="SystemHook" id="@cdktf/provider-gitlab.systemHook.SystemHook"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/system_hook gitlab_system_hook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.systemHook.SystemHook.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import system_hook

systemHook.SystemHook(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  url: str,
  enable_ssl_verification: typing.Union[bool, IResolvable] = None,
  id: str = None,
  merge_requests_events: typing.Union[bool, IResolvable] = None,
  push_events: typing.Union[bool, IResolvable] = None,
  repository_update_events: typing.Union[bool, IResolvable] = None,
  tag_push_events: typing.Union[bool, IResolvable] = None,
  token: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.url">url</a></code> | <code>str</code> | The hook URL. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.enableSslVerification">enable_ssl_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do SSL verification when triggering the hook. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/system_hook#id SystemHook#id}. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.mergeRequestsEvents">merge_requests_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Trigger hook on merge requests events. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, the hook fires on push events. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.repositoryUpdateEvents">repository_update_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Trigger hook on repository update events. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, the hook fires on new tags being pushed. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.token">token</a></code> | <code>str</code> | Secret token to validate received payloads; |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.url"></a>

- *Type:* str

The hook URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/system_hook#url SystemHook#url}

---

##### `enable_ssl_verification`<sup>Optional</sup> <a name="enable_ssl_verification" id="@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.enableSslVerification"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do SSL verification when triggering the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/system_hook#enable_ssl_verification SystemHook#enable_ssl_verification}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/system_hook#id SystemHook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `merge_requests_events`<sup>Optional</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.mergeRequestsEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Trigger hook on merge requests events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/system_hook#merge_requests_events SystemHook#merge_requests_events}

---

##### `push_events`<sup>Optional</sup> <a name="push_events" id="@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.pushEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, the hook fires on push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/system_hook#push_events SystemHook#push_events}

---

##### `repository_update_events`<sup>Optional</sup> <a name="repository_update_events" id="@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.repositoryUpdateEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Trigger hook on repository update events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/system_hook#repository_update_events SystemHook#repository_update_events}

---

##### `tag_push_events`<sup>Optional</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.tagPushEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, the hook fires on new tags being pushed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/system_hook#tag_push_events SystemHook#tag_push_events}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-gitlab.systemHook.SystemHook.Initializer.parameter.token"></a>

- *Type:* str

Secret token to validate received payloads;

this isn’t returned in the response. This attribute is not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/system_hook#token SystemHook#token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.resetEnableSslVerification">reset_enable_ssl_verification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.resetMergeRequestsEvents">reset_merge_requests_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.resetPushEvents">reset_push_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.resetRepositoryUpdateEvents">reset_repository_update_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.resetTagPushEvents">reset_tag_push_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.resetToken">reset_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.systemHook.SystemHook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.systemHook.SystemHook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.systemHook.SystemHook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.systemHook.SystemHook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.systemHook.SystemHook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.systemHook.SystemHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.systemHook.SystemHook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.systemHook.SystemHook.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.systemHook.SystemHook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.systemHook.SystemHook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.systemHook.SystemHook.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.systemHook.SystemHook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.systemHook.SystemHook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.systemHook.SystemHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.systemHook.SystemHook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.systemHook.SystemHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.systemHook.SystemHook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.systemHook.SystemHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.systemHook.SystemHook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.systemHook.SystemHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.systemHook.SystemHook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.systemHook.SystemHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.systemHook.SystemHook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.systemHook.SystemHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.systemHook.SystemHook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.systemHook.SystemHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.systemHook.SystemHook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.systemHook.SystemHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.systemHook.SystemHook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.systemHook.SystemHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.systemHook.SystemHook.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.systemHook.SystemHook.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.systemHook.SystemHook.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.systemHook.SystemHook.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.systemHook.SystemHook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.systemHook.SystemHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.systemHook.SystemHook.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.systemHook.SystemHook.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.systemHook.SystemHook.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.systemHook.SystemHook.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.systemHook.SystemHook.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.systemHook.SystemHook.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.systemHook.SystemHook.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_enable_ssl_verification` <a name="reset_enable_ssl_verification" id="@cdktf/provider-gitlab.systemHook.SystemHook.resetEnableSslVerification"></a>

```python
def reset_enable_ssl_verification() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.systemHook.SystemHook.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_merge_requests_events` <a name="reset_merge_requests_events" id="@cdktf/provider-gitlab.systemHook.SystemHook.resetMergeRequestsEvents"></a>

```python
def reset_merge_requests_events() -> None
```

##### `reset_push_events` <a name="reset_push_events" id="@cdktf/provider-gitlab.systemHook.SystemHook.resetPushEvents"></a>

```python
def reset_push_events() -> None
```

##### `reset_repository_update_events` <a name="reset_repository_update_events" id="@cdktf/provider-gitlab.systemHook.SystemHook.resetRepositoryUpdateEvents"></a>

```python
def reset_repository_update_events() -> None
```

##### `reset_tag_push_events` <a name="reset_tag_push_events" id="@cdktf/provider-gitlab.systemHook.SystemHook.resetTagPushEvents"></a>

```python
def reset_tag_push_events() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-gitlab.systemHook.SystemHook.resetToken"></a>

```python
def reset_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SystemHook resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.systemHook.SystemHook.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import system_hook

systemHook.SystemHook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.systemHook.SystemHook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.systemHook.SystemHook.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import system_hook

systemHook.SystemHook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.systemHook.SystemHook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.systemHook.SystemHook.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import system_hook

systemHook.SystemHook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.systemHook.SystemHook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.systemHook.SystemHook.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import system_hook

systemHook.SystemHook.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SystemHook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.systemHook.SystemHook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.systemHook.SystemHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SystemHook to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.systemHook.SystemHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SystemHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/system_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.systemHook.SystemHook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SystemHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.enableSslVerificationInput">enable_ssl_verification_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.mergeRequestsEventsInput">merge_requests_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.pushEventsInput">push_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.repositoryUpdateEventsInput">repository_update_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.tagPushEventsInput">tag_push_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.enableSslVerification">enable_ssl_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.mergeRequestsEvents">merge_requests_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.repositoryUpdateEvents">repository_update_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.url">url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `enable_ssl_verification_input`<sup>Optional</sup> <a name="enable_ssl_verification_input" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.enableSslVerificationInput"></a>

```python
enable_ssl_verification_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `merge_requests_events_input`<sup>Optional</sup> <a name="merge_requests_events_input" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.mergeRequestsEventsInput"></a>

```python
merge_requests_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `push_events_input`<sup>Optional</sup> <a name="push_events_input" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.pushEventsInput"></a>

```python
push_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository_update_events_input`<sup>Optional</sup> <a name="repository_update_events_input" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.repositoryUpdateEventsInput"></a>

```python
repository_update_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag_push_events_input`<sup>Optional</sup> <a name="tag_push_events_input" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.tagPushEventsInput"></a>

```python
tag_push_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `enable_ssl_verification`<sup>Required</sup> <a name="enable_ssl_verification" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.enableSslVerification"></a>

```python
enable_ssl_verification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `merge_requests_events`<sup>Required</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.mergeRequestsEvents"></a>

```python
merge_requests_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `push_events`<sup>Required</sup> <a name="push_events" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.pushEvents"></a>

```python
push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository_update_events`<sup>Required</sup> <a name="repository_update_events" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.repositoryUpdateEvents"></a>

```python
repository_update_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag_push_events`<sup>Required</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.tagPushEvents"></a>

```python
tag_push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.url"></a>

```python
url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.systemHook.SystemHook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SystemHookConfig <a name="SystemHookConfig" id="@cdktf/provider-gitlab.systemHook.SystemHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.systemHook.SystemHookConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import system_hook

systemHook.SystemHookConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  url: str,
  enable_ssl_verification: typing.Union[bool, IResolvable] = None,
  id: str = None,
  merge_requests_events: typing.Union[bool, IResolvable] = None,
  push_events: typing.Union[bool, IResolvable] = None,
  repository_update_events: typing.Union[bool, IResolvable] = None,
  tag_push_events: typing.Union[bool, IResolvable] = None,
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.url">url</a></code> | <code>str</code> | The hook URL. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.enableSslVerification">enable_ssl_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do SSL verification when triggering the hook. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/system_hook#id SystemHook#id}. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.mergeRequestsEvents">merge_requests_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Trigger hook on merge requests events. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, the hook fires on push events. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.repositoryUpdateEvents">repository_update_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Trigger hook on repository update events. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, the hook fires on new tags being pushed. |
| <code><a href="#@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.token">token</a></code> | <code>str</code> | Secret token to validate received payloads; |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.url"></a>

```python
url: str
```

- *Type:* str

The hook URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/system_hook#url SystemHook#url}

---

##### `enable_ssl_verification`<sup>Optional</sup> <a name="enable_ssl_verification" id="@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.enableSslVerification"></a>

```python
enable_ssl_verification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do SSL verification when triggering the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/system_hook#enable_ssl_verification SystemHook#enable_ssl_verification}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/system_hook#id SystemHook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `merge_requests_events`<sup>Optional</sup> <a name="merge_requests_events" id="@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.mergeRequestsEvents"></a>

```python
merge_requests_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Trigger hook on merge requests events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/system_hook#merge_requests_events SystemHook#merge_requests_events}

---

##### `push_events`<sup>Optional</sup> <a name="push_events" id="@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.pushEvents"></a>

```python
push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, the hook fires on push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/system_hook#push_events SystemHook#push_events}

---

##### `repository_update_events`<sup>Optional</sup> <a name="repository_update_events" id="@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.repositoryUpdateEvents"></a>

```python
repository_update_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Trigger hook on repository update events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/system_hook#repository_update_events SystemHook#repository_update_events}

---

##### `tag_push_events`<sup>Optional</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.tagPushEvents"></a>

```python
tag_push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, the hook fires on new tags being pushed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/system_hook#tag_push_events SystemHook#tag_push_events}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-gitlab.systemHook.SystemHookConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Secret token to validate received payloads;

this isn’t returned in the response. This attribute is not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/system_hook#token SystemHook#token}

---



