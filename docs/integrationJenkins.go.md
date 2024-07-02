# `integrationJenkins` Submodule <a name="`integrationJenkins` Submodule" id="@cdktf/provider-gitlab.integrationJenkins"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationJenkins <a name="IntegrationJenkins" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/integration_jenkins gitlab_integration_jenkins}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/integrationjenkins"

integrationjenkins.NewIntegrationJenkins(scope Construct, id *string, config IntegrationJenkinsConfig) IntegrationJenkins
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig">IntegrationJenkinsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig">IntegrationJenkinsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetEnableSslVerification">ResetEnableSslVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetMergeRequestEvents">ResetMergeRequestEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetPushEvents">ResetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetTagPushEvents">ResetTagPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEnableSslVerification` <a name="ResetEnableSslVerification" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetEnableSslVerification"></a>

```go
func ResetEnableSslVerification()
```

##### `ResetMergeRequestEvents` <a name="ResetMergeRequestEvents" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetMergeRequestEvents"></a>

```go
func ResetMergeRequestEvents()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPushEvents` <a name="ResetPushEvents" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetPushEvents"></a>

```go
func ResetPushEvents()
```

##### `ResetTagPushEvents` <a name="ResetTagPushEvents" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetTagPushEvents"></a>

```go
func ResetTagPushEvents()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.resetUsername"></a>

```go
func ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationJenkins resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/integrationjenkins"

integrationjenkins.IntegrationJenkins_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/integrationjenkins"

integrationjenkins.IntegrationJenkins_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/integrationjenkins"

integrationjenkins.IntegrationJenkins_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/integrationjenkins"

integrationjenkins.IntegrationJenkins_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IntegrationJenkins resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IntegrationJenkins to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IntegrationJenkins that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/integration_jenkins#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationJenkins to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.active">Active</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.enableSslVerificationInput">EnableSslVerificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.jenkinsUrlInput">JenkinsUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.mergeRequestEventsInput">MergeRequestEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.projectNameInput">ProjectNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.pushEventsInput">PushEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.tagPushEventsInput">TagPushEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.enableSslVerification">EnableSslVerification</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.jenkinsUrl">JenkinsUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.mergeRequestEvents">MergeRequestEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.projectName">ProjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.pushEvents">PushEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.tagPushEvents">TagPushEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.active"></a>

```go
func Active() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `EnableSslVerificationInput`<sup>Optional</sup> <a name="EnableSslVerificationInput" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.enableSslVerificationInput"></a>

```go
func EnableSslVerificationInput() interface{}
```

- *Type:* interface{}

---

##### `JenkinsUrlInput`<sup>Optional</sup> <a name="JenkinsUrlInput" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.jenkinsUrlInput"></a>

```go
func JenkinsUrlInput() *string
```

- *Type:* *string

---

##### `MergeRequestEventsInput`<sup>Optional</sup> <a name="MergeRequestEventsInput" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.mergeRequestEventsInput"></a>

```go
func MergeRequestEventsInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProjectNameInput`<sup>Optional</sup> <a name="ProjectNameInput" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.projectNameInput"></a>

```go
func ProjectNameInput() *string
```

- *Type:* *string

---

##### `PushEventsInput`<sup>Optional</sup> <a name="PushEventsInput" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.pushEventsInput"></a>

```go
func PushEventsInput() interface{}
```

- *Type:* interface{}

---

##### `TagPushEventsInput`<sup>Optional</sup> <a name="TagPushEventsInput" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.tagPushEventsInput"></a>

```go
func TagPushEventsInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `EnableSslVerification`<sup>Required</sup> <a name="EnableSslVerification" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.enableSslVerification"></a>

```go
func EnableSslVerification() interface{}
```

- *Type:* interface{}

---

##### `JenkinsUrl`<sup>Required</sup> <a name="JenkinsUrl" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.jenkinsUrl"></a>

```go
func JenkinsUrl() *string
```

- *Type:* *string

---

##### `MergeRequestEvents`<sup>Required</sup> <a name="MergeRequestEvents" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.mergeRequestEvents"></a>

```go
func MergeRequestEvents() interface{}
```

- *Type:* interface{}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.projectName"></a>

```go
func ProjectName() *string
```

- *Type:* *string

---

##### `PushEvents`<sup>Required</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.pushEvents"></a>

```go
func PushEvents() interface{}
```

- *Type:* interface{}

---

##### `TagPushEvents`<sup>Required</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.tagPushEvents"></a>

```go
func TagPushEvents() interface{}
```

- *Type:* interface{}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkins.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationJenkinsConfig <a name="IntegrationJenkinsConfig" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/integrationjenkins"

&integrationjenkins.IntegrationJenkinsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	JenkinsUrl: *string,
	Project: *string,
	ProjectName: *string,
	EnableSslVerification: interface{},
	MergeRequestEvents: interface{},
	Password: *string,
	PushEvents: interface{},
	TagPushEvents: interface{},
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.jenkinsUrl">JenkinsUrl</a></code> | <code>*string</code> | Jenkins URL like `http://jenkins.example.com`. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.project">Project</a></code> | <code>*string</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.projectName">ProjectName</a></code> | <code>*string</code> | The URL-friendly project name. Example: `my_project_name`. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.enableSslVerification">EnableSslVerification</a></code> | <code>interface{}</code> | Enable SSL verification. Defaults to `true` (enabled). |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.mergeRequestEvents">MergeRequestEvents</a></code> | <code>interface{}</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.password">Password</a></code> | <code>*string</code> | Password for authentication with the Jenkins server, if authentication is required by the server. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.pushEvents">PushEvents</a></code> | <code>interface{}</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.tagPushEvents">TagPushEvents</a></code> | <code>interface{}</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.username">Username</a></code> | <code>*string</code> | Username for authentication with the Jenkins server, if authentication is required by the server. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `JenkinsUrl`<sup>Required</sup> <a name="JenkinsUrl" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.jenkinsUrl"></a>

```go
JenkinsUrl *string
```

- *Type:* *string

Jenkins URL like `http://jenkins.example.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/integration_jenkins#jenkins_url IntegrationJenkins#jenkins_url}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/integration_jenkins#project IntegrationJenkins#project}

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.projectName"></a>

```go
ProjectName *string
```

- *Type:* *string

The URL-friendly project name. Example: `my_project_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/integration_jenkins#project_name IntegrationJenkins#project_name}

---

##### `EnableSslVerification`<sup>Optional</sup> <a name="EnableSslVerification" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.enableSslVerification"></a>

```go
EnableSslVerification interface{}
```

- *Type:* interface{}

Enable SSL verification. Defaults to `true` (enabled).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/integration_jenkins#enable_ssl_verification IntegrationJenkins#enable_ssl_verification}

---

##### `MergeRequestEvents`<sup>Optional</sup> <a name="MergeRequestEvents" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.mergeRequestEvents"></a>

```go
MergeRequestEvents interface{}
```

- *Type:* interface{}

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/integration_jenkins#merge_request_events IntegrationJenkins#merge_request_events}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for authentication with the Jenkins server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/integration_jenkins#password IntegrationJenkins#password}

---

##### `PushEvents`<sup>Optional</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.pushEvents"></a>

```go
PushEvents interface{}
```

- *Type:* interface{}

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/integration_jenkins#push_events IntegrationJenkins#push_events}

---

##### `TagPushEvents`<sup>Optional</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.tagPushEvents"></a>

```go
TagPushEvents interface{}
```

- *Type:* interface{}

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/integration_jenkins#tag_push_events IntegrationJenkins#tag_push_events}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-gitlab.integrationJenkins.IntegrationJenkinsConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username for authentication with the Jenkins server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/integration_jenkins#username IntegrationJenkins#username}

---



