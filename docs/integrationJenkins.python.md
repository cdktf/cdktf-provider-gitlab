# `integrationJenkins` Submodule <a name="`integrationJenkins` Submodule" id="@cdktf/provider-gitlab.integrationJenkins"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationJenkins <a name="IntegrationJenkins" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins gitlab_integration_jenkins}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_jenkins

integrationJenkins.IntegrationJenkins(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  jenkins_url: str,
  project: str,
  project_name: str,
  enable_ssl_verification: typing.Union[bool, IResolvable] = None,
  merge_request_events: typing.Union[bool, IResolvable] = None,
  password: str = None,
  push_events: typing.Union[bool, IResolvable] = None,
  tag_push_events: typing.Union[bool, IResolvable] = None,
  username: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.jenkinsUrl">jenkins_url</a></code> | <code>str</code> | Jenkins URL like `http://jenkins.example.com`. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.project">project</a></code> | <code>str</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.projectName">project_name</a></code> | <code>str</code> | The URL-friendly project name. Example: `my_project_name`. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.enableSslVerification">enable_ssl_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable SSL verification. Defaults to `true` (enabled). |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.mergeRequestEvents">merge_request_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.password">password</a></code> | <code>str</code> | Password for authentication with the Jenkins server, if authentication is required by the server. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.username">username</a></code> | <code>str</code> | Username for authentication with the Jenkins server, if authentication is required by the server. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `jenkins_url`<sup>Required</sup> <a name="jenkins_url" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.jenkinsUrl"></a>

- *Type:* str

Jenkins URL like `http://jenkins.example.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#jenkins_url IntegrationJenkins#jenkins_url}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.project"></a>

- *Type:* str

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#project IntegrationJenkins#project}

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.projectName"></a>

- *Type:* str

The URL-friendly project name. Example: `my_project_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#project_name IntegrationJenkins#project_name}

---

##### `enable_ssl_verification`<sup>Optional</sup> <a name="enable_ssl_verification" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.enableSslVerification"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable SSL verification. Defaults to `true` (enabled).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#enable_ssl_verification IntegrationJenkins#enable_ssl_verification}

---

##### `merge_request_events`<sup>Optional</sup> <a name="merge_request_events" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.mergeRequestEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#merge_request_events IntegrationJenkins#merge_request_events}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.password"></a>

- *Type:* str

Password for authentication with the Jenkins server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#password IntegrationJenkins#password}

---

##### `push_events`<sup>Optional</sup> <a name="push_events" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.pushEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#push_events IntegrationJenkins#push_events}

---

##### `tag_push_events`<sup>Optional</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.tagPushEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#tag_push_events IntegrationJenkins#tag_push_events}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.username"></a>

- *Type:* str

Username for authentication with the Jenkins server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#username IntegrationJenkins#username}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetEnableSslVerification">reset_enable_ssl_verification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetMergeRequestEvents">reset_merge_request_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetPushEvents">reset_push_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetTagPushEvents">reset_tag_push_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetUsername">reset_username</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_enable_ssl_verification` <a name="reset_enable_ssl_verification" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetEnableSslVerification"></a>

```python
def reset_enable_ssl_verification() -> None
```

##### `reset_merge_request_events` <a name="reset_merge_request_events" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetMergeRequestEvents"></a>

```python
def reset_merge_request_events() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_push_events` <a name="reset_push_events" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetPushEvents"></a>

```python
def reset_push_events() -> None
```

##### `reset_tag_push_events` <a name="reset_tag_push_events" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetTagPushEvents"></a>

```python
def reset_tag_push_events() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetUsername"></a>

```python
def reset_username() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IntegrationJenkins resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_jenkins

integrationJenkins.IntegrationJenkins.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_jenkins

integrationJenkins.IntegrationJenkins.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_jenkins

integrationJenkins.IntegrationJenkins.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_jenkins

integrationJenkins.IntegrationJenkins.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IntegrationJenkins resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationJenkins to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationJenkins that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationJenkins to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.enableSslVerificationInput">enable_ssl_verification_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.jenkinsUrlInput">jenkins_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.mergeRequestEventsInput">merge_request_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.projectNameInput">project_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.pushEventsInput">push_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.tagPushEventsInput">tag_push_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.enableSslVerification">enable_ssl_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.jenkinsUrl">jenkins_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.mergeRequestEvents">merge_request_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.projectName">project_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `enable_ssl_verification_input`<sup>Optional</sup> <a name="enable_ssl_verification_input" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.enableSslVerificationInput"></a>

```python
enable_ssl_verification_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jenkins_url_input`<sup>Optional</sup> <a name="jenkins_url_input" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.jenkinsUrlInput"></a>

```python
jenkins_url_input: str
```

- *Type:* str

---

##### `merge_request_events_input`<sup>Optional</sup> <a name="merge_request_events_input" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.mergeRequestEventsInput"></a>

```python
merge_request_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `project_name_input`<sup>Optional</sup> <a name="project_name_input" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.projectNameInput"></a>

```python
project_name_input: str
```

- *Type:* str

---

##### `push_events_input`<sup>Optional</sup> <a name="push_events_input" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.pushEventsInput"></a>

```python
push_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag_push_events_input`<sup>Optional</sup> <a name="tag_push_events_input" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.tagPushEventsInput"></a>

```python
tag_push_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `enable_ssl_verification`<sup>Required</sup> <a name="enable_ssl_verification" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.enableSslVerification"></a>

```python
enable_ssl_verification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jenkins_url`<sup>Required</sup> <a name="jenkins_url" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.jenkinsUrl"></a>

```python
jenkins_url: str
```

- *Type:* str

---

##### `merge_request_events`<sup>Required</sup> <a name="merge_request_events" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.mergeRequestEvents"></a>

```python
merge_request_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

---

##### `push_events`<sup>Required</sup> <a name="push_events" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.pushEvents"></a>

```python
push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag_push_events`<sup>Required</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.tagPushEvents"></a>

```python
tag_push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationJenkinsConfig <a name="IntegrationJenkinsConfig" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_jenkins

integrationJenkins.IntegrationJenkinsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  jenkins_url: str,
  project: str,
  project_name: str,
  enable_ssl_verification: typing.Union[bool, IResolvable] = None,
  merge_request_events: typing.Union[bool, IResolvable] = None,
  password: str = None,
  push_events: typing.Union[bool, IResolvable] = None,
  tag_push_events: typing.Union[bool, IResolvable] = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.jenkinsUrl">jenkins_url</a></code> | <code>str</code> | Jenkins URL like `http://jenkins.example.com`. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.project">project</a></code> | <code>str</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.projectName">project_name</a></code> | <code>str</code> | The URL-friendly project name. Example: `my_project_name`. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.enableSslVerification">enable_ssl_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable SSL verification. Defaults to `true` (enabled). |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.mergeRequestEvents">merge_request_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.password">password</a></code> | <code>str</code> | Password for authentication with the Jenkins server, if authentication is required by the server. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.pushEvents">push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.tagPushEvents">tag_push_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.username">username</a></code> | <code>str</code> | Username for authentication with the Jenkins server, if authentication is required by the server. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `jenkins_url`<sup>Required</sup> <a name="jenkins_url" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.jenkinsUrl"></a>

```python
jenkins_url: str
```

- *Type:* str

Jenkins URL like `http://jenkins.example.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#jenkins_url IntegrationJenkins#jenkins_url}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#project IntegrationJenkins#project}

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

The URL-friendly project name. Example: `my_project_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#project_name IntegrationJenkins#project_name}

---

##### `enable_ssl_verification`<sup>Optional</sup> <a name="enable_ssl_verification" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.enableSslVerification"></a>

```python
enable_ssl_verification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable SSL verification. Defaults to `true` (enabled).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#enable_ssl_verification IntegrationJenkins#enable_ssl_verification}

---

##### `merge_request_events`<sup>Optional</sup> <a name="merge_request_events" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.mergeRequestEvents"></a>

```python
merge_request_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#merge_request_events IntegrationJenkins#merge_request_events}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Password for authentication with the Jenkins server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#password IntegrationJenkins#password}

---

##### `push_events`<sup>Optional</sup> <a name="push_events" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.pushEvents"></a>

```python
push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#push_events IntegrationJenkins#push_events}

---

##### `tag_push_events`<sup>Optional</sup> <a name="tag_push_events" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.tagPushEvents"></a>

```python
tag_push_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#tag_push_events IntegrationJenkins#tag_push_events}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Username for authentication with the Jenkins server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/integration_jenkins#username IntegrationJenkins#username}

---



