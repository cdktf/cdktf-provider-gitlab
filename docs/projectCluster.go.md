# `gitlab_project_cluster`

Refer to the Terraform Registory for docs: [`gitlab_project_cluster`](https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_cluster).

# `projectCluster` Submodule <a name="`projectCluster` Submodule" id="@cdktf/provider-gitlab.projectCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectCluster <a name="ProjectCluster" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_cluster gitlab_project_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v8/projectcluster"

projectcluster.NewProjectCluster(scope Construct, id *string, config ProjectClusterConfig) ProjectCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig">ProjectClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig">ProjectClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetEnvironmentScope">ResetEnvironmentScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetKubernetesAuthorizationType">ResetKubernetesAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetKubernetesCaCert">ResetKubernetesCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetKubernetesNamespace">ResetKubernetesNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetManaged">ResetManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetManagementProjectId">ResetManagementProjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEnvironmentScope` <a name="ResetEnvironmentScope" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetEnvironmentScope"></a>

```go
func ResetEnvironmentScope()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetKubernetesAuthorizationType` <a name="ResetKubernetesAuthorizationType" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetKubernetesAuthorizationType"></a>

```go
func ResetKubernetesAuthorizationType()
```

##### `ResetKubernetesCaCert` <a name="ResetKubernetesCaCert" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetKubernetesCaCert"></a>

```go
func ResetKubernetesCaCert()
```

##### `ResetKubernetesNamespace` <a name="ResetKubernetesNamespace" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetKubernetesNamespace"></a>

```go
func ResetKubernetesNamespace()
```

##### `ResetManaged` <a name="ResetManaged" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetManaged"></a>

```go
func ResetManaged()
```

##### `ResetManagementProjectId` <a name="ResetManagementProjectId" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetManagementProjectId"></a>

```go
func ResetManagementProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v8/projectcluster"

projectcluster.ProjectCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v8/projectcluster"

projectcluster.ProjectCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v8/projectcluster"

projectcluster.ProjectCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.clusterType">ClusterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.platformType">PlatformType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.providerType">ProviderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.environmentScopeInput">EnvironmentScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesApiUrlInput">KubernetesApiUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesAuthorizationTypeInput">KubernetesAuthorizationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesCaCertInput">KubernetesCaCertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesNamespaceInput">KubernetesNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesTokenInput">KubernetesTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.managedInput">ManagedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.managementProjectIdInput">ManagementProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.environmentScope">EnvironmentScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesApiUrl">KubernetesApiUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesAuthorizationType">KubernetesAuthorizationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesCaCert">KubernetesCaCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesNamespace">KubernetesNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesToken">KubernetesToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.managed">Managed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.managementProjectId">ManagementProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.clusterType"></a>

```go
func ClusterType() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `PlatformType`<sup>Required</sup> <a name="PlatformType" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.platformType"></a>

```go
func PlatformType() *string
```

- *Type:* *string

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.providerType"></a>

```go
func ProviderType() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentScopeInput`<sup>Optional</sup> <a name="EnvironmentScopeInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.environmentScopeInput"></a>

```go
func EnvironmentScopeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KubernetesApiUrlInput`<sup>Optional</sup> <a name="KubernetesApiUrlInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesApiUrlInput"></a>

```go
func KubernetesApiUrlInput() *string
```

- *Type:* *string

---

##### `KubernetesAuthorizationTypeInput`<sup>Optional</sup> <a name="KubernetesAuthorizationTypeInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesAuthorizationTypeInput"></a>

```go
func KubernetesAuthorizationTypeInput() *string
```

- *Type:* *string

---

##### `KubernetesCaCertInput`<sup>Optional</sup> <a name="KubernetesCaCertInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesCaCertInput"></a>

```go
func KubernetesCaCertInput() *string
```

- *Type:* *string

---

##### `KubernetesNamespaceInput`<sup>Optional</sup> <a name="KubernetesNamespaceInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesNamespaceInput"></a>

```go
func KubernetesNamespaceInput() *string
```

- *Type:* *string

---

##### `KubernetesTokenInput`<sup>Optional</sup> <a name="KubernetesTokenInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesTokenInput"></a>

```go
func KubernetesTokenInput() *string
```

- *Type:* *string

---

##### `ManagedInput`<sup>Optional</sup> <a name="ManagedInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.managedInput"></a>

```go
func ManagedInput() interface{}
```

- *Type:* interface{}

---

##### `ManagementProjectIdInput`<sup>Optional</sup> <a name="ManagementProjectIdInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.managementProjectIdInput"></a>

```go
func ManagementProjectIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentScope`<sup>Required</sup> <a name="EnvironmentScope" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.environmentScope"></a>

```go
func EnvironmentScope() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KubernetesApiUrl`<sup>Required</sup> <a name="KubernetesApiUrl" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesApiUrl"></a>

```go
func KubernetesApiUrl() *string
```

- *Type:* *string

---

##### `KubernetesAuthorizationType`<sup>Required</sup> <a name="KubernetesAuthorizationType" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesAuthorizationType"></a>

```go
func KubernetesAuthorizationType() *string
```

- *Type:* *string

---

##### `KubernetesCaCert`<sup>Required</sup> <a name="KubernetesCaCert" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesCaCert"></a>

```go
func KubernetesCaCert() *string
```

- *Type:* *string

---

##### `KubernetesNamespace`<sup>Required</sup> <a name="KubernetesNamespace" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesNamespace"></a>

```go
func KubernetesNamespace() *string
```

- *Type:* *string

---

##### `KubernetesToken`<sup>Required</sup> <a name="KubernetesToken" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesToken"></a>

```go
func KubernetesToken() *string
```

- *Type:* *string

---

##### `Managed`<sup>Required</sup> <a name="Managed" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.managed"></a>

```go
func Managed() interface{}
```

- *Type:* interface{}

---

##### `ManagementProjectId`<sup>Required</sup> <a name="ManagementProjectId" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.managementProjectId"></a>

```go
func ManagementProjectId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectClusterConfig <a name="ProjectClusterConfig" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v8/projectcluster"

&projectcluster.ProjectClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KubernetesApiUrl: *string,
	KubernetesToken: *string,
	Name: *string,
	Project: *string,
	Domain: *string,
	Enabled: interface{},
	EnvironmentScope: *string,
	Id: *string,
	KubernetesAuthorizationType: *string,
	KubernetesCaCert: *string,
	KubernetesNamespace: *string,
	Managed: interface{},
	ManagementProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.kubernetesApiUrl">KubernetesApiUrl</a></code> | <code>*string</code> | The URL to access the Kubernetes API. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.kubernetesToken">KubernetesToken</a></code> | <code>*string</code> | The token to authenticate against Kubernetes. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.name">Name</a></code> | <code>*string</code> | The name of cluster. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.project">Project</a></code> | <code>*string</code> | The id of the project to add the cluster to. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.domain">Domain</a></code> | <code>*string</code> | The base domain of the cluster. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Determines if cluster is active or not. Defaults to `true`. This attribute cannot be read. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.environmentScope">EnvironmentScope</a></code> | <code>*string</code> | The associated environment to the cluster. Defaults to `*`. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_cluster#id ProjectCluster#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.kubernetesAuthorizationType">KubernetesAuthorizationType</a></code> | <code>*string</code> | The cluster authorization type. Valid values are `rbac`, `abac`, `unknown_authorization`. Defaults to `rbac`. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.kubernetesCaCert">KubernetesCaCert</a></code> | <code>*string</code> | TLS certificate (needed if API is using a self-signed TLS certificate). |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.kubernetesNamespace">KubernetesNamespace</a></code> | <code>*string</code> | The unique namespace related to the project. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.managed">Managed</a></code> | <code>interface{}</code> | Determines if cluster is managed by gitlab or not. Defaults to `true`. This attribute cannot be read. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.managementProjectId">ManagementProjectId</a></code> | <code>*string</code> | The ID of the management project for the cluster. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KubernetesApiUrl`<sup>Required</sup> <a name="KubernetesApiUrl" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.kubernetesApiUrl"></a>

```go
KubernetesApiUrl *string
```

- *Type:* *string

The URL to access the Kubernetes API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_cluster#kubernetes_api_url ProjectCluster#kubernetes_api_url}

---

##### `KubernetesToken`<sup>Required</sup> <a name="KubernetesToken" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.kubernetesToken"></a>

```go
KubernetesToken *string
```

- *Type:* *string

The token to authenticate against Kubernetes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_cluster#kubernetes_token ProjectCluster#kubernetes_token}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_cluster#name ProjectCluster#name}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The id of the project to add the cluster to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_cluster#project ProjectCluster#project}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The base domain of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_cluster#domain ProjectCluster#domain}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Determines if cluster is active or not. Defaults to `true`. This attribute cannot be read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_cluster#enabled ProjectCluster#enabled}

---

##### `EnvironmentScope`<sup>Optional</sup> <a name="EnvironmentScope" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.environmentScope"></a>

```go
EnvironmentScope *string
```

- *Type:* *string

The associated environment to the cluster. Defaults to `*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_cluster#environment_scope ProjectCluster#environment_scope}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_cluster#id ProjectCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KubernetesAuthorizationType`<sup>Optional</sup> <a name="KubernetesAuthorizationType" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.kubernetesAuthorizationType"></a>

```go
KubernetesAuthorizationType *string
```

- *Type:* *string

The cluster authorization type. Valid values are `rbac`, `abac`, `unknown_authorization`. Defaults to `rbac`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_cluster#kubernetes_authorization_type ProjectCluster#kubernetes_authorization_type}

---

##### `KubernetesCaCert`<sup>Optional</sup> <a name="KubernetesCaCert" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.kubernetesCaCert"></a>

```go
KubernetesCaCert *string
```

- *Type:* *string

TLS certificate (needed if API is using a self-signed TLS certificate).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_cluster#kubernetes_ca_cert ProjectCluster#kubernetes_ca_cert}

---

##### `KubernetesNamespace`<sup>Optional</sup> <a name="KubernetesNamespace" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.kubernetesNamespace"></a>

```go
KubernetesNamespace *string
```

- *Type:* *string

The unique namespace related to the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_cluster#kubernetes_namespace ProjectCluster#kubernetes_namespace}

---

##### `Managed`<sup>Optional</sup> <a name="Managed" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.managed"></a>

```go
Managed interface{}
```

- *Type:* interface{}

Determines if cluster is managed by gitlab or not. Defaults to `true`. This attribute cannot be read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_cluster#managed ProjectCluster#managed}

---

##### `ManagementProjectId`<sup>Optional</sup> <a name="ManagementProjectId" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.managementProjectId"></a>

```go
ManagementProjectId *string
```

- *Type:* *string

The ID of the management project for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project_cluster#management_project_id ProjectCluster#management_project_id}

---



