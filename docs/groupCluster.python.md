# `groupCluster` Submodule <a name="`groupCluster` Submodule" id="@cdktf/provider-gitlab.groupCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupCluster <a name="GroupCluster" id="@cdktf/provider-gitlab.groupCluster.GroupCluster"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster gitlab_group_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_cluster

groupCluster.GroupCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group: str,
  kubernetes_api_url: str,
  kubernetes_token: str,
  name: str,
  domain: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  environment_scope: str = None,
  id: str = None,
  kubernetes_authorization_type: str = None,
  kubernetes_ca_cert: str = None,
  managed: typing.Union[bool, IResolvable] = None,
  management_project_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.group">group</a></code> | <code>str</code> | The id of the group to add the cluster to. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.kubernetesApiUrl">kubernetes_api_url</a></code> | <code>str</code> | The URL to access the Kubernetes API. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.kubernetesToken">kubernetes_token</a></code> | <code>str</code> | The token to authenticate against Kubernetes. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of cluster. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.domain">domain</a></code> | <code>str</code> | The base domain of the cluster. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if cluster is active or not. Defaults to `true`. This attribute cannot be read. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.environmentScope">environment_scope</a></code> | <code>str</code> | The associated environment to the cluster. Defaults to `*`. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#id GroupCluster#id}. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.kubernetesAuthorizationType">kubernetes_authorization_type</a></code> | <code>str</code> | The cluster authorization type. Valid values are `rbac`, `abac`, `unknown_authorization`. Defaults to `rbac`. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.kubernetesCaCert">kubernetes_ca_cert</a></code> | <code>str</code> | TLS certificate (needed if API is using a self-signed TLS certificate). |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.managed">managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if cluster is managed by gitlab or not. Defaults to `true`. This attribute cannot be read. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.managementProjectId">management_project_id</a></code> | <code>str</code> | The ID of the management project for the cluster. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.group"></a>

- *Type:* str

The id of the group to add the cluster to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#group GroupCluster#group}

---

##### `kubernetes_api_url`<sup>Required</sup> <a name="kubernetes_api_url" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.kubernetesApiUrl"></a>

- *Type:* str

The URL to access the Kubernetes API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#kubernetes_api_url GroupCluster#kubernetes_api_url}

---

##### `kubernetes_token`<sup>Required</sup> <a name="kubernetes_token" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.kubernetesToken"></a>

- *Type:* str

The token to authenticate against Kubernetes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#kubernetes_token GroupCluster#kubernetes_token}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.name"></a>

- *Type:* str

The name of cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#name GroupCluster#name}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.domain"></a>

- *Type:* str

The base domain of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#domain GroupCluster#domain}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if cluster is active or not. Defaults to `true`. This attribute cannot be read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#enabled GroupCluster#enabled}

---

##### `environment_scope`<sup>Optional</sup> <a name="environment_scope" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.environmentScope"></a>

- *Type:* str

The associated environment to the cluster. Defaults to `*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#environment_scope GroupCluster#environment_scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#id GroupCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubernetes_authorization_type`<sup>Optional</sup> <a name="kubernetes_authorization_type" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.kubernetesAuthorizationType"></a>

- *Type:* str

The cluster authorization type. Valid values are `rbac`, `abac`, `unknown_authorization`. Defaults to `rbac`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#kubernetes_authorization_type GroupCluster#kubernetes_authorization_type}

---

##### `kubernetes_ca_cert`<sup>Optional</sup> <a name="kubernetes_ca_cert" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.kubernetesCaCert"></a>

- *Type:* str

TLS certificate (needed if API is using a self-signed TLS certificate).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#kubernetes_ca_cert GroupCluster#kubernetes_ca_cert}

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.managed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if cluster is managed by gitlab or not. Defaults to `true`. This attribute cannot be read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#managed GroupCluster#managed}

---

##### `management_project_id`<sup>Optional</sup> <a name="management_project_id" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.Initializer.parameter.managementProjectId"></a>

- *Type:* str

The ID of the management project for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#management_project_id GroupCluster#management_project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.resetEnvironmentScope">reset_environment_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.resetKubernetesAuthorizationType">reset_kubernetes_authorization_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.resetKubernetesCaCert">reset_kubernetes_ca_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.resetManaged">reset_managed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.resetManagementProjectId">reset_management_project_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_domain` <a name="reset_domain" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_environment_scope` <a name="reset_environment_scope" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.resetEnvironmentScope"></a>

```python
def reset_environment_scope() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kubernetes_authorization_type` <a name="reset_kubernetes_authorization_type" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.resetKubernetesAuthorizationType"></a>

```python
def reset_kubernetes_authorization_type() -> None
```

##### `reset_kubernetes_ca_cert` <a name="reset_kubernetes_ca_cert" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.resetKubernetesCaCert"></a>

```python
def reset_kubernetes_ca_cert() -> None
```

##### `reset_managed` <a name="reset_managed" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.resetManaged"></a>

```python
def reset_managed() -> None
```

##### `reset_management_project_id` <a name="reset_management_project_id" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.resetManagementProjectId"></a>

```python
def reset_management_project_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GroupCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import group_cluster

groupCluster.GroupCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import group_cluster

groupCluster.GroupCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import group_cluster

groupCluster.GroupCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import group_cluster

groupCluster.GroupCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GroupCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GroupCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GroupCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GroupCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.clusterType">cluster_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.platformType">platform_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.providerType">provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.environmentScopeInput">environment_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.kubernetesApiUrlInput">kubernetes_api_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.kubernetesAuthorizationTypeInput">kubernetes_authorization_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.kubernetesCaCertInput">kubernetes_ca_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.kubernetesTokenInput">kubernetes_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.managedInput">managed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.managementProjectIdInput">management_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.environmentScope">environment_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.kubernetesApiUrl">kubernetes_api_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.kubernetesAuthorizationType">kubernetes_authorization_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.kubernetesCaCert">kubernetes_ca_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.kubernetesToken">kubernetes_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.managed">managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.managementProjectId">management_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_type`<sup>Required</sup> <a name="cluster_type" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.clusterType"></a>

```python
cluster_type: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `platform_type`<sup>Required</sup> <a name="platform_type" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.platformType"></a>

```python
platform_type: str
```

- *Type:* str

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `environment_scope_input`<sup>Optional</sup> <a name="environment_scope_input" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.environmentScopeInput"></a>

```python
environment_scope_input: str
```

- *Type:* str

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kubernetes_api_url_input`<sup>Optional</sup> <a name="kubernetes_api_url_input" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.kubernetesApiUrlInput"></a>

```python
kubernetes_api_url_input: str
```

- *Type:* str

---

##### `kubernetes_authorization_type_input`<sup>Optional</sup> <a name="kubernetes_authorization_type_input" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.kubernetesAuthorizationTypeInput"></a>

```python
kubernetes_authorization_type_input: str
```

- *Type:* str

---

##### `kubernetes_ca_cert_input`<sup>Optional</sup> <a name="kubernetes_ca_cert_input" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.kubernetesCaCertInput"></a>

```python
kubernetes_ca_cert_input: str
```

- *Type:* str

---

##### `kubernetes_token_input`<sup>Optional</sup> <a name="kubernetes_token_input" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.kubernetesTokenInput"></a>

```python
kubernetes_token_input: str
```

- *Type:* str

---

##### `managed_input`<sup>Optional</sup> <a name="managed_input" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.managedInput"></a>

```python
managed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `management_project_id_input`<sup>Optional</sup> <a name="management_project_id_input" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.managementProjectIdInput"></a>

```python
management_project_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `environment_scope`<sup>Required</sup> <a name="environment_scope" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.environmentScope"></a>

```python
environment_scope: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kubernetes_api_url`<sup>Required</sup> <a name="kubernetes_api_url" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.kubernetesApiUrl"></a>

```python
kubernetes_api_url: str
```

- *Type:* str

---

##### `kubernetes_authorization_type`<sup>Required</sup> <a name="kubernetes_authorization_type" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.kubernetesAuthorizationType"></a>

```python
kubernetes_authorization_type: str
```

- *Type:* str

---

##### `kubernetes_ca_cert`<sup>Required</sup> <a name="kubernetes_ca_cert" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.kubernetesCaCert"></a>

```python
kubernetes_ca_cert: str
```

- *Type:* str

---

##### `kubernetes_token`<sup>Required</sup> <a name="kubernetes_token" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.kubernetesToken"></a>

```python
kubernetes_token: str
```

- *Type:* str

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.managed"></a>

```python
managed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `management_project_id`<sup>Required</sup> <a name="management_project_id" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.managementProjectId"></a>

```python
management_project_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.groupCluster.GroupCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GroupClusterConfig <a name="GroupClusterConfig" id="@cdktf/provider-gitlab.groupCluster.GroupClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group_cluster

groupCluster.GroupClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group: str,
  kubernetes_api_url: str,
  kubernetes_token: str,
  name: str,
  domain: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  environment_scope: str = None,
  id: str = None,
  kubernetes_authorization_type: str = None,
  kubernetes_ca_cert: str = None,
  managed: typing.Union[bool, IResolvable] = None,
  management_project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.group">group</a></code> | <code>str</code> | The id of the group to add the cluster to. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.kubernetesApiUrl">kubernetes_api_url</a></code> | <code>str</code> | The URL to access the Kubernetes API. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.kubernetesToken">kubernetes_token</a></code> | <code>str</code> | The token to authenticate against Kubernetes. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.name">name</a></code> | <code>str</code> | The name of cluster. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.domain">domain</a></code> | <code>str</code> | The base domain of the cluster. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if cluster is active or not. Defaults to `true`. This attribute cannot be read. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.environmentScope">environment_scope</a></code> | <code>str</code> | The associated environment to the cluster. Defaults to `*`. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#id GroupCluster#id}. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.kubernetesAuthorizationType">kubernetes_authorization_type</a></code> | <code>str</code> | The cluster authorization type. Valid values are `rbac`, `abac`, `unknown_authorization`. Defaults to `rbac`. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.kubernetesCaCert">kubernetes_ca_cert</a></code> | <code>str</code> | TLS certificate (needed if API is using a self-signed TLS certificate). |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.managed">managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if cluster is managed by gitlab or not. Defaults to `true`. This attribute cannot be read. |
| <code><a href="#@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.managementProjectId">management_project_id</a></code> | <code>str</code> | The ID of the management project for the cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.group"></a>

```python
group: str
```

- *Type:* str

The id of the group to add the cluster to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#group GroupCluster#group}

---

##### `kubernetes_api_url`<sup>Required</sup> <a name="kubernetes_api_url" id="@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.kubernetesApiUrl"></a>

```python
kubernetes_api_url: str
```

- *Type:* str

The URL to access the Kubernetes API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#kubernetes_api_url GroupCluster#kubernetes_api_url}

---

##### `kubernetes_token`<sup>Required</sup> <a name="kubernetes_token" id="@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.kubernetesToken"></a>

```python
kubernetes_token: str
```

- *Type:* str

The token to authenticate against Kubernetes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#kubernetes_token GroupCluster#kubernetes_token}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#name GroupCluster#name}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

The base domain of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#domain GroupCluster#domain}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if cluster is active or not. Defaults to `true`. This attribute cannot be read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#enabled GroupCluster#enabled}

---

##### `environment_scope`<sup>Optional</sup> <a name="environment_scope" id="@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.environmentScope"></a>

```python
environment_scope: str
```

- *Type:* str

The associated environment to the cluster. Defaults to `*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#environment_scope GroupCluster#environment_scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#id GroupCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubernetes_authorization_type`<sup>Optional</sup> <a name="kubernetes_authorization_type" id="@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.kubernetesAuthorizationType"></a>

```python
kubernetes_authorization_type: str
```

- *Type:* str

The cluster authorization type. Valid values are `rbac`, `abac`, `unknown_authorization`. Defaults to `rbac`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#kubernetes_authorization_type GroupCluster#kubernetes_authorization_type}

---

##### `kubernetes_ca_cert`<sup>Optional</sup> <a name="kubernetes_ca_cert" id="@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.kubernetesCaCert"></a>

```python
kubernetes_ca_cert: str
```

- *Type:* str

TLS certificate (needed if API is using a self-signed TLS certificate).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#kubernetes_ca_cert GroupCluster#kubernetes_ca_cert}

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.managed"></a>

```python
managed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if cluster is managed by gitlab or not. Defaults to `true`. This attribute cannot be read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#managed GroupCluster#managed}

---

##### `management_project_id`<sup>Optional</sup> <a name="management_project_id" id="@cdktf/provider-gitlab.groupCluster.GroupClusterConfig.property.managementProjectId"></a>

```python
management_project_id: str
```

- *Type:* str

The ID of the management project for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.1/docs/resources/group_cluster#management_project_id GroupCluster#management_project_id}

---



