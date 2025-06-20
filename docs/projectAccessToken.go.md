# `projectAccessToken` Submodule <a name="`projectAccessToken` Submodule" id="@cdktf/provider-gitlab.projectAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectAccessToken <a name="ProjectAccessToken" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_access_token gitlab_project_access_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectaccesstoken"

projectaccesstoken.NewProjectAccessToken(scope Construct, id *string, config ProjectAccessTokenConfig) ProjectAccessToken
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig">ProjectAccessTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig">ProjectAccessTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.putRotationConfiguration">PutRotationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetExpiresAt">ResetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetRotationConfiguration">ResetRotationConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRotationConfiguration` <a name="PutRotationConfiguration" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.putRotationConfiguration"></a>

```go
func PutRotationConfiguration(value ProjectAccessTokenRotationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.putRotationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration">ProjectAccessTokenRotationConfiguration</a>

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExpiresAt` <a name="ResetExpiresAt" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetExpiresAt"></a>

```go
func ResetExpiresAt()
```

##### `ResetRotationConfiguration` <a name="ResetRotationConfiguration" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetRotationConfiguration"></a>

```go
func ResetRotationConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectAccessToken resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectaccesstoken"

projectaccesstoken.ProjectAccessToken_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectaccesstoken"

projectaccesstoken.ProjectAccessToken_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectaccesstoken"

projectaccesstoken.ProjectAccessToken_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectaccesstoken"

projectaccesstoken.ProjectAccessToken_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ProjectAccessToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ProjectAccessToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ProjectAccessToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_access_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ProjectAccessToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.active">Active</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.revoked">Revoked</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.rotationConfiguration">RotationConfiguration</a></code> | <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference">ProjectAccessTokenRotationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.userId">UserId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.expiresAtInput">ExpiresAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.rotationConfigurationInput">RotationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.active"></a>

```go
func Active() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Revoked`<sup>Required</sup> <a name="Revoked" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.revoked"></a>

```go
func Revoked() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RotationConfiguration`<sup>Required</sup> <a name="RotationConfiguration" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.rotationConfiguration"></a>

```go
func RotationConfiguration() ProjectAccessTokenRotationConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference">ProjectAccessTokenRotationConfigurationOutputReference</a>

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.userId"></a>

```go
func UserId() *f64
```

- *Type:* *f64

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpiresAtInput`<sup>Optional</sup> <a name="ExpiresAtInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.expiresAtInput"></a>

```go
func ExpiresAtInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RotationConfigurationInput`<sup>Optional</sup> <a name="RotationConfigurationInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.rotationConfigurationInput"></a>

```go
func RotationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectAccessTokenConfig <a name="ProjectAccessTokenConfig" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectaccesstoken"

&projectaccesstoken.ProjectAccessTokenConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Project: *string,
	Scopes: *[]*string,
	AccessLevel: *string,
	Description: *string,
	ExpiresAt: *string,
	RotationConfiguration: github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15.projectAccessToken.ProjectAccessTokenRotationConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.name">Name</a></code> | <code>*string</code> | The name of the project access token. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.project">Project</a></code> | <code>*string</code> | The ID or full path of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | The scopes of the project access token. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | The access level for the project access token. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.description">Description</a></code> | <code>*string</code> | The description of the project access token. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | When the token will expire, YYYY-MM-DD format. Is automatically set when `rotation_configuration` is used. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.rotationConfiguration">RotationConfiguration</a></code> | <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration">ProjectAccessTokenRotationConfiguration</a></code> | The configuration for when to rotate a token automatically. Will not rotate a token until `terraform apply` is run. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the project access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_access_token#name ProjectAccessToken#name}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID or full path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_access_token#project ProjectAccessToken#project}

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

The scopes of the project access token.

valid values are: `api`, `read_api`, `read_registry`, `write_registry`, `read_repository`, `write_repository`, `create_runner`, `manage_runner`, `ai_features`, `k8s_proxy`, `read_observability`, `write_observability`, `self_rotate`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_access_token#scopes ProjectAccessToken#scopes}

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

The access level for the project access token.

Valid values are: `no one`, `minimal`, `guest`, `planner`, `reporter`, `developer`, `maintainer`, `owner`. Default is `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_access_token#access_level ProjectAccessToken#access_level}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the project access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_access_token#description ProjectAccessToken#description}

---

##### `ExpiresAt`<sup>Optional</sup> <a name="ExpiresAt" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.expiresAt"></a>

```go
ExpiresAt *string
```

- *Type:* *string

When the token will expire, YYYY-MM-DD format. Is automatically set when `rotation_configuration` is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_access_token#expires_at ProjectAccessToken#expires_at}

---

##### `RotationConfiguration`<sup>Optional</sup> <a name="RotationConfiguration" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.rotationConfiguration"></a>

```go
RotationConfiguration ProjectAccessTokenRotationConfiguration
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration">ProjectAccessTokenRotationConfiguration</a>

The configuration for when to rotate a token automatically. Will not rotate a token until `terraform apply` is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_access_token#rotation_configuration ProjectAccessToken#rotation_configuration}

---

### ProjectAccessTokenRotationConfiguration <a name="ProjectAccessTokenRotationConfiguration" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectaccesstoken"

&projectaccesstoken.ProjectAccessTokenRotationConfiguration {
	ExpirationDays: *f64,
	RotateBeforeDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration.property.expirationDays">ExpirationDays</a></code> | <code>*f64</code> | The duration (in days) the new token should be valid for. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration.property.rotateBeforeDays">RotateBeforeDays</a></code> | <code>*f64</code> | The duration (in days) before the expiration when the token should be rotated. |

---

##### `ExpirationDays`<sup>Required</sup> <a name="ExpirationDays" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration.property.expirationDays"></a>

```go
ExpirationDays *f64
```

- *Type:* *f64

The duration (in days) the new token should be valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_access_token#expiration_days ProjectAccessToken#expiration_days}

---

##### `RotateBeforeDays`<sup>Required</sup> <a name="RotateBeforeDays" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration.property.rotateBeforeDays"></a>

```go
RotateBeforeDays *f64
```

- *Type:* *f64

The duration (in days) before the expiration when the token should be rotated.

As an example, if set to 7 days, the token will rotate 7 days before the expiration date, but only when `terraform apply` is run in that timeframe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_access_token#rotate_before_days ProjectAccessToken#rotate_before_days}

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectAccessTokenRotationConfigurationOutputReference <a name="ProjectAccessTokenRotationConfigurationOutputReference" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectaccesstoken"

projectaccesstoken.NewProjectAccessTokenRotationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ProjectAccessTokenRotationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.expirationDaysInput">ExpirationDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.rotateBeforeDaysInput">RotateBeforeDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.expirationDays">ExpirationDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.rotateBeforeDays">RotateBeforeDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpirationDaysInput`<sup>Optional</sup> <a name="ExpirationDaysInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.expirationDaysInput"></a>

```go
func ExpirationDaysInput() *f64
```

- *Type:* *f64

---

##### `RotateBeforeDaysInput`<sup>Optional</sup> <a name="RotateBeforeDaysInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.rotateBeforeDaysInput"></a>

```go
func RotateBeforeDaysInput() *f64
```

- *Type:* *f64

---

##### `ExpirationDays`<sup>Required</sup> <a name="ExpirationDays" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.expirationDays"></a>

```go
func ExpirationDays() *f64
```

- *Type:* *f64

---

##### `RotateBeforeDays`<sup>Required</sup> <a name="RotateBeforeDays" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.rotateBeforeDays"></a>

```go
func RotateBeforeDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



