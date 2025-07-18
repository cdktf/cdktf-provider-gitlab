# `integrationPipelinesEmail` Submodule <a name="`integrationPipelinesEmail` Submodule" id="@cdktf/provider-gitlab.integrationPipelinesEmail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationPipelinesEmail <a name="IntegrationPipelinesEmail" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/integration_pipelines_email gitlab_integration_pipelines_email}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_pipelines_email

integrationPipelinesEmail.IntegrationPipelinesEmail(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project: str,
  recipients: typing.List[str],
  branches_to_be_notified: str = None,
  id: str = None,
  notify_only_broken_pipelines: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.project">project</a></code> | <code>str</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.recipients">recipients</a></code> | <code>typing.List[str]</code> | ) email addresses where notifications are sent. |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.branchesToBeNotified">branches_to_be_notified</a></code> | <code>str</code> | Branches to send notifications for. Valid options are `all`, `default`, `protected`, and `default_and_protected`. Default is `default`. |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/integration_pipelines_email#id IntegrationPipelinesEmail#id}. |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.notifyOnlyBrokenPipelines">notify_only_broken_pipelines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Notify only broken pipelines. Default is true. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.project"></a>

- *Type:* str

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/integration_pipelines_email#project IntegrationPipelinesEmail#project}

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.recipients"></a>

- *Type:* typing.List[str]

) email addresses where notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/integration_pipelines_email#recipients IntegrationPipelinesEmail#recipients}

---

##### `branches_to_be_notified`<sup>Optional</sup> <a name="branches_to_be_notified" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.branchesToBeNotified"></a>

- *Type:* str

Branches to send notifications for. Valid options are `all`, `default`, `protected`, and `default_and_protected`. Default is `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/integration_pipelines_email#branches_to_be_notified IntegrationPipelinesEmail#branches_to_be_notified}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/integration_pipelines_email#id IntegrationPipelinesEmail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notify_only_broken_pipelines`<sup>Optional</sup> <a name="notify_only_broken_pipelines" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.Initializer.parameter.notifyOnlyBrokenPipelines"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Notify only broken pipelines. Default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/integration_pipelines_email#notify_only_broken_pipelines IntegrationPipelinesEmail#notify_only_broken_pipelines}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.resetBranchesToBeNotified">reset_branches_to_be_notified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.resetNotifyOnlyBrokenPipelines">reset_notify_only_broken_pipelines</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_branches_to_be_notified` <a name="reset_branches_to_be_notified" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.resetBranchesToBeNotified"></a>

```python
def reset_branches_to_be_notified() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_notify_only_broken_pipelines` <a name="reset_notify_only_broken_pipelines" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.resetNotifyOnlyBrokenPipelines"></a>

```python
def reset_notify_only_broken_pipelines() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IntegrationPipelinesEmail resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_pipelines_email

integrationPipelinesEmail.IntegrationPipelinesEmail.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_pipelines_email

integrationPipelinesEmail.IntegrationPipelinesEmail.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_pipelines_email

integrationPipelinesEmail.IntegrationPipelinesEmail.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_pipelines_email

integrationPipelinesEmail.IntegrationPipelinesEmail.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IntegrationPipelinesEmail resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationPipelinesEmail to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationPipelinesEmail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/integration_pipelines_email#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationPipelinesEmail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.branchesToBeNotifiedInput">branches_to_be_notified_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.notifyOnlyBrokenPipelinesInput">notify_only_broken_pipelines_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.recipientsInput">recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.branchesToBeNotified">branches_to_be_notified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.notifyOnlyBrokenPipelines">notify_only_broken_pipelines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.recipients">recipients</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `branches_to_be_notified_input`<sup>Optional</sup> <a name="branches_to_be_notified_input" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.branchesToBeNotifiedInput"></a>

```python
branches_to_be_notified_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `notify_only_broken_pipelines_input`<sup>Optional</sup> <a name="notify_only_broken_pipelines_input" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.notifyOnlyBrokenPipelinesInput"></a>

```python
notify_only_broken_pipelines_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `recipients_input`<sup>Optional</sup> <a name="recipients_input" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.recipientsInput"></a>

```python
recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `branches_to_be_notified`<sup>Required</sup> <a name="branches_to_be_notified" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.branchesToBeNotified"></a>

```python
branches_to_be_notified: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `notify_only_broken_pipelines`<sup>Required</sup> <a name="notify_only_broken_pipelines" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.notifyOnlyBrokenPipelines"></a>

```python
notify_only_broken_pipelines: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.recipients"></a>

```python
recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmail.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationPipelinesEmailConfig <a name="IntegrationPipelinesEmailConfig" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import integration_pipelines_email

integrationPipelinesEmail.IntegrationPipelinesEmailConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project: str,
  recipients: typing.List[str],
  branches_to_be_notified: str = None,
  id: str = None,
  notify_only_broken_pipelines: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.property.project">project</a></code> | <code>str</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.property.recipients">recipients</a></code> | <code>typing.List[str]</code> | ) email addresses where notifications are sent. |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.property.branchesToBeNotified">branches_to_be_notified</a></code> | <code>str</code> | Branches to send notifications for. Valid options are `all`, `default`, `protected`, and `default_and_protected`. Default is `default`. |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/integration_pipelines_email#id IntegrationPipelinesEmail#id}. |
| <code><a href="#@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.property.notifyOnlyBrokenPipelines">notify_only_broken_pipelines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Notify only broken pipelines. Default is true. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.property.project"></a>

```python
project: str
```

- *Type:* str

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/integration_pipelines_email#project IntegrationPipelinesEmail#project}

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.property.recipients"></a>

```python
recipients: typing.List[str]
```

- *Type:* typing.List[str]

) email addresses where notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/integration_pipelines_email#recipients IntegrationPipelinesEmail#recipients}

---

##### `branches_to_be_notified`<sup>Optional</sup> <a name="branches_to_be_notified" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.property.branchesToBeNotified"></a>

```python
branches_to_be_notified: str
```

- *Type:* str

Branches to send notifications for. Valid options are `all`, `default`, `protected`, and `default_and_protected`. Default is `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/integration_pipelines_email#branches_to_be_notified IntegrationPipelinesEmail#branches_to_be_notified}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/integration_pipelines_email#id IntegrationPipelinesEmail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notify_only_broken_pipelines`<sup>Optional</sup> <a name="notify_only_broken_pipelines" id="@cdktf/provider-gitlab.integrationPipelinesEmail.IntegrationPipelinesEmailConfig.property.notifyOnlyBrokenPipelines"></a>

```python
notify_only_broken_pipelines: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Notify only broken pipelines. Default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/integration_pipelines_email#notify_only_broken_pipelines IntegrationPipelinesEmail#notify_only_broken_pipelines}

---



