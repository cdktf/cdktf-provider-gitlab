# `instanceCluster` Submodule <a name="`instanceCluster` Submodule" id="@cdktf/provider-gitlab.instanceCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InstanceCluster <a name="InstanceCluster" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/instance_cluster gitlab_instance_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/instancecluster"

instancecluster.NewInstanceCluster(scope Construct, id *string, config InstanceClusterConfig) InstanceCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig">InstanceClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig">InstanceClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetEnvironmentScope">ResetEnvironmentScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetKubernetesAuthorizationType">ResetKubernetesAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetKubernetesCaCert">ResetKubernetesCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetKubernetesNamespace">ResetKubernetesNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetManaged">ResetManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetManagementProjectId">ResetManagementProjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEnvironmentScope` <a name="ResetEnvironmentScope" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetEnvironmentScope"></a>

```go
func ResetEnvironmentScope()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetKubernetesAuthorizationType` <a name="ResetKubernetesAuthorizationType" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetKubernetesAuthorizationType"></a>

```go
func ResetKubernetesAuthorizationType()
```

##### `ResetKubernetesCaCert` <a name="ResetKubernetesCaCert" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetKubernetesCaCert"></a>

```go
func ResetKubernetesCaCert()
```

##### `ResetKubernetesNamespace` <a name="ResetKubernetesNamespace" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetKubernetesNamespace"></a>

```go
func ResetKubernetesNamespace()
```

##### `ResetManaged` <a name="ResetManaged" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetManaged"></a>

```go
func ResetManaged()
```

##### `ResetManagementProjectId` <a name="ResetManagementProjectId" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetManagementProjectId"></a>

```go
func ResetManagementProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a InstanceCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/instancecluster"

instancecluster.InstanceCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/instancecluster"

instancecluster.InstanceCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/instancecluster"

instancecluster.InstanceCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/instancecluster"

instancecluster.InstanceCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a InstanceCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the InstanceCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing InstanceCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/instance_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the InstanceCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.clusterType">ClusterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.platformType">PlatformType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.providerType">ProviderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.environmentScopeInput">EnvironmentScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesApiUrlInput">KubernetesApiUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesAuthorizationTypeInput">KubernetesAuthorizationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesCaCertInput">KubernetesCaCertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesNamespaceInput">KubernetesNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesTokenInput">KubernetesTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.managedInput">ManagedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.managementProjectIdInput">ManagementProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.environmentScope">EnvironmentScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesApiUrl">KubernetesApiUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesAuthorizationType">KubernetesAuthorizationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesCaCert">KubernetesCaCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesNamespace">KubernetesNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesToken">KubernetesToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.managed">Managed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.managementProjectId">ManagementProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.clusterType"></a>

```go
func ClusterType() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `PlatformType`<sup>Required</sup> <a name="PlatformType" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.platformType"></a>

```go
func PlatformType() *string
```

- *Type:* *string

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.providerType"></a>

```go
func ProviderType() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentScopeInput`<sup>Optional</sup> <a name="EnvironmentScopeInput" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.environmentScopeInput"></a>

```go
func EnvironmentScopeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KubernetesApiUrlInput`<sup>Optional</sup> <a name="KubernetesApiUrlInput" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesApiUrlInput"></a>

```go
func KubernetesApiUrlInput() *string
```

- *Type:* *string

---

##### `KubernetesAuthorizationTypeInput`<sup>Optional</sup> <a name="KubernetesAuthorizationTypeInput" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesAuthorizationTypeInput"></a>

```go
func KubernetesAuthorizationTypeInput() *string
```

- *Type:* *string

---

##### `KubernetesCaCertInput`<sup>Optional</sup> <a name="KubernetesCaCertInput" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesCaCertInput"></a>

```go
func KubernetesCaCertInput() *string
```

- *Type:* *string

---

##### `KubernetesNamespaceInput`<sup>Optional</sup> <a name="KubernetesNamespaceInput" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesNamespaceInput"></a>

```go
func KubernetesNamespaceInput() *string
```

- *Type:* *string

---

##### `KubernetesTokenInput`<sup>Optional</sup> <a name="KubernetesTokenInput" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesTokenInput"></a>

```go
func KubernetesTokenInput() *string
```

- *Type:* *string

---

##### `ManagedInput`<sup>Optional</sup> <a name="ManagedInput" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.managedInput"></a>

```go
func ManagedInput() interface{}
```

- *Type:* interface{}

---

##### `ManagementProjectIdInput`<sup>Optional</sup> <a name="ManagementProjectIdInput" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.managementProjectIdInput"></a>

```go
func ManagementProjectIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentScope`<sup>Required</sup> <a name="EnvironmentScope" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.environmentScope"></a>

```go
func EnvironmentScope() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KubernetesApiUrl`<sup>Required</sup> <a name="KubernetesApiUrl" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesApiUrl"></a>

```go
func KubernetesApiUrl() *string
```

- *Type:* *string

---

##### `KubernetesAuthorizationType`<sup>Required</sup> <a name="KubernetesAuthorizationType" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesAuthorizationType"></a>

```go
func KubernetesAuthorizationType() *string
```

- *Type:* *string

---

##### `KubernetesCaCert`<sup>Required</sup> <a name="KubernetesCaCert" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesCaCert"></a>

```go
func KubernetesCaCert() *string
```

- *Type:* *string

---

##### `KubernetesNamespace`<sup>Required</sup> <a name="KubernetesNamespace" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesNamespace"></a>

```go
func KubernetesNamespace() *string
```

- *Type:* *string

---

##### `KubernetesToken`<sup>Required</sup> <a name="KubernetesToken" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesToken"></a>

```go
func KubernetesToken() *string
```

- *Type:* *string

---

##### `Managed`<sup>Required</sup> <a name="Managed" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.managed"></a>

```go
func Managed() interface{}
```

- *Type:* interface{}

---

##### `ManagementProjectId`<sup>Required</sup> <a name="ManagementProjectId" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.managementProjectId"></a>

```go
func ManagementProjectId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### InstanceClusterConfig <a name="InstanceClusterConfig" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/instancecluster"

&instancecluster.InstanceClusterConfig {
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
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.kubernetesApiUrl">KubernetesApiUrl</a></code> | <code>*string</code> | The URL to access the Kubernetes API. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.kubernetesToken">KubernetesToken</a></code> | <code>*string</code> | The token to authenticate against Kubernetes. This attribute cannot be read. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.name">Name</a></code> | <code>*string</code> | The name of cluster. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.domain">Domain</a></code> | <code>*string</code> | The base domain of the cluster. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Determines if cluster is active or not. Defaults to `true`. This attribute cannot be read. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.environmentScope">EnvironmentScope</a></code> | <code>*string</code> | The associated environment to the cluster. Defaults to `*`. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/instance_cluster#id InstanceCluster#id}. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.kubernetesAuthorizationType">KubernetesAuthorizationType</a></code> | <code>*string</code> | The cluster authorization type. Valid values are `rbac`, `abac`, `unknown_authorization`. Defaults to `rbac`. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.kubernetesCaCert">KubernetesCaCert</a></code> | <code>*string</code> | TLS certificate (needed if API is using a self-signed TLS certificate). |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.kubernetesNamespace">KubernetesNamespace</a></code> | <code>*string</code> | The unique namespace related to the instance. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.managed">Managed</a></code> | <code>interface{}</code> | Determines if cluster is managed by gitlab or not. Defaults to `true`. This attribute cannot be read. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.managementProjectId">ManagementProjectId</a></code> | <code>*string</code> | The ID of the management project for the cluster. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KubernetesApiUrl`<sup>Required</sup> <a name="KubernetesApiUrl" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.kubernetesApiUrl"></a>

```go
KubernetesApiUrl *string
```

- *Type:* *string

The URL to access the Kubernetes API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/instance_cluster#kubernetes_api_url InstanceCluster#kubernetes_api_url}

---

##### `KubernetesToken`<sup>Required</sup> <a name="KubernetesToken" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.kubernetesToken"></a>

```go
KubernetesToken *string
```

- *Type:* *string

The token to authenticate against Kubernetes. This attribute cannot be read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/instance_cluster#kubernetes_token InstanceCluster#kubernetes_token}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/instance_cluster#name InstanceCluster#name}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The base domain of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/instance_cluster#domain InstanceCluster#domain}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Determines if cluster is active or not. Defaults to `true`. This attribute cannot be read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/instance_cluster#enabled InstanceCluster#enabled}

---

##### `EnvironmentScope`<sup>Optional</sup> <a name="EnvironmentScope" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.environmentScope"></a>

```go
EnvironmentScope *string
```

- *Type:* *string

The associated environment to the cluster. Defaults to `*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/instance_cluster#environment_scope InstanceCluster#environment_scope}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/instance_cluster#id InstanceCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KubernetesAuthorizationType`<sup>Optional</sup> <a name="KubernetesAuthorizationType" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.kubernetesAuthorizationType"></a>

```go
KubernetesAuthorizationType *string
```

- *Type:* *string

The cluster authorization type. Valid values are `rbac`, `abac`, `unknown_authorization`. Defaults to `rbac`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/instance_cluster#kubernetes_authorization_type InstanceCluster#kubernetes_authorization_type}

---

##### `KubernetesCaCert`<sup>Optional</sup> <a name="KubernetesCaCert" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.kubernetesCaCert"></a>

```go
KubernetesCaCert *string
```

- *Type:* *string

TLS certificate (needed if API is using a self-signed TLS certificate).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/instance_cluster#kubernetes_ca_cert InstanceCluster#kubernetes_ca_cert}

---

##### `KubernetesNamespace`<sup>Optional</sup> <a name="KubernetesNamespace" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.kubernetesNamespace"></a>

```go
KubernetesNamespace *string
```

- *Type:* *string

The unique namespace related to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/instance_cluster#kubernetes_namespace InstanceCluster#kubernetes_namespace}

---

##### `Managed`<sup>Optional</sup> <a name="Managed" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.managed"></a>

```go
Managed interface{}
```

- *Type:* interface{}

Determines if cluster is managed by gitlab or not. Defaults to `true`. This attribute cannot be read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/instance_cluster#managed InstanceCluster#managed}

---

##### `ManagementProjectId`<sup>Optional</sup> <a name="ManagementProjectId" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.managementProjectId"></a>

```go
ManagementProjectId *string
```

- *Type:* *string

The ID of the management project for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/instance_cluster#management_project_id InstanceCluster#management_project_id}

---



