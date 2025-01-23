# `valueStreamAnalytics` Submodule <a name="`valueStreamAnalytics` Submodule" id="@cdktf/provider-gitlab.valueStreamAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ValueStreamAnalytics <a name="ValueStreamAnalytics" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/value_stream_analytics gitlab_value_stream_analytics}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/valuestreamanalytics"

valuestreamanalytics.NewValueStreamAnalytics(scope Construct, id *string, config ValueStreamAnalyticsConfig) ValueStreamAnalytics
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig">ValueStreamAnalyticsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig">ValueStreamAnalyticsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.putStages">PutStages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetGroupFullPath">ResetGroupFullPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetProjectFullPath">ResetProjectFullPath</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStages` <a name="PutStages" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.putStages"></a>

```go
func PutStages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.putStages.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGroupFullPath` <a name="ResetGroupFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetGroupFullPath"></a>

```go
func ResetGroupFullPath()
```

##### `ResetProjectFullPath` <a name="ResetProjectFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetProjectFullPath"></a>

```go
func ResetProjectFullPath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ValueStreamAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/valuestreamanalytics"

valuestreamanalytics.ValueStreamAnalytics_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/valuestreamanalytics"

valuestreamanalytics.ValueStreamAnalytics_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/valuestreamanalytics"

valuestreamanalytics.ValueStreamAnalytics_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/valuestreamanalytics"

valuestreamanalytics.ValueStreamAnalytics_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ValueStreamAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ValueStreamAnalytics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ValueStreamAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/value_stream_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ValueStreamAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.stages">Stages</a></code> | <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList">ValueStreamAnalyticsStagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.groupFullPathInput">GroupFullPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.projectFullPathInput">ProjectFullPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.stagesInput">StagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.groupFullPath">GroupFullPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.projectFullPath">ProjectFullPath</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.stages"></a>

```go
func Stages() ValueStreamAnalyticsStagesList
```

- *Type:* <a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList">ValueStreamAnalyticsStagesList</a>

---

##### `GroupFullPathInput`<sup>Optional</sup> <a name="GroupFullPathInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.groupFullPathInput"></a>

```go
func GroupFullPathInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectFullPathInput`<sup>Optional</sup> <a name="ProjectFullPathInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.projectFullPathInput"></a>

```go
func ProjectFullPathInput() *string
```

- *Type:* *string

---

##### `StagesInput`<sup>Optional</sup> <a name="StagesInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.stagesInput"></a>

```go
func StagesInput() interface{}
```

- *Type:* interface{}

---

##### `GroupFullPath`<sup>Required</sup> <a name="GroupFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.groupFullPath"></a>

```go
func GroupFullPath() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectFullPath`<sup>Required</sup> <a name="ProjectFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.projectFullPath"></a>

```go
func ProjectFullPath() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ValueStreamAnalyticsConfig <a name="ValueStreamAnalyticsConfig" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/valuestreamanalytics"

&valuestreamanalytics.ValueStreamAnalyticsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Stages: interface{},
	GroupFullPath: *string,
	ProjectFullPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.name">Name</a></code> | <code>*string</code> | The name of the value stream. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.stages">Stages</a></code> | <code>interface{}</code> | Stages of the value stream. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.groupFullPath">GroupFullPath</a></code> | <code>*string</code> | Full path of the group the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.projectFullPath">ProjectFullPath</a></code> | <code>*string</code> | Full path of the project the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the value stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/value_stream_analytics#name ValueStreamAnalytics#name}

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.stages"></a>

```go
Stages interface{}
```

- *Type:* interface{}

Stages of the value stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/value_stream_analytics#stages ValueStreamAnalytics#stages}

---

##### `GroupFullPath`<sup>Optional</sup> <a name="GroupFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.groupFullPath"></a>

```go
GroupFullPath *string
```

- *Type:* *string

Full path of the group the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/value_stream_analytics#group_full_path ValueStreamAnalytics#group_full_path}

---

##### `ProjectFullPath`<sup>Optional</sup> <a name="ProjectFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.projectFullPath"></a>

```go
ProjectFullPath *string
```

- *Type:* *string

Full path of the project the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/value_stream_analytics#project_full_path ValueStreamAnalytics#project_full_path}

---

### ValueStreamAnalyticsStages <a name="ValueStreamAnalyticsStages" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/valuestreamanalytics"

&valuestreamanalytics.ValueStreamAnalyticsStages {
	Name: *string,
	Custom: interface{},
	EndEventIdentifier: *string,
	EndEventLabelId: *string,
	Hidden: interface{},
	StartEventIdentifier: *string,
	StartEventLabelId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.name">Name</a></code> | <code>*string</code> | The name of the value stream stage. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.custom">Custom</a></code> | <code>interface{}</code> | Boolean whether the stage is customized. If false, it assigns a built-in default stage by name. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.endEventIdentifier">EndEventIdentifier</a></code> | <code>*string</code> | End event identifier. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.endEventLabelId">EndEventLabelId</a></code> | <code>*string</code> | Label ID associated with the end event identifier. In the format of `gid://gitlab/GroupLabel/<id>` or `gid://gitlab/ProjectLabel/<id>`. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.hidden">Hidden</a></code> | <code>interface{}</code> | Boolean whether the stage is hidden, GitLab provided default stages are hidden by default. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.startEventIdentifier">StartEventIdentifier</a></code> | <code>*string</code> | Start event identifier. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.startEventLabelId">StartEventLabelId</a></code> | <code>*string</code> | Label ID associated with the start event identifier. In the format of `gid://gitlab/GroupLabel/<id>` or `gid://gitlab/ProjectLabel/<id>`. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the value stream stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/value_stream_analytics#name ValueStreamAnalytics#name}

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.custom"></a>

```go
Custom interface{}
```

- *Type:* interface{}

Boolean whether the stage is customized. If false, it assigns a built-in default stage by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/value_stream_analytics#custom ValueStreamAnalytics#custom}

---

##### `EndEventIdentifier`<sup>Optional</sup> <a name="EndEventIdentifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.endEventIdentifier"></a>

```go
EndEventIdentifier *string
```

- *Type:* *string

End event identifier.

Valid values are: `CODE_STAGE_START`, `ISSUE_CLOSED`, `ISSUE_CREATED`, `ISSUE_DEPLOYED_TO_PRODUCTION`, `ISSUE_FIRST_ADDED_TO_BOARD`, `ISSUE_FIRST_ADDED_TO_ITERATION`, `ISSUE_FIRST_ASSIGNED_AT`, `ISSUE_FIRST_ASSOCIATED_WITH_MILESTONE`, `ISSUE_FIRST_MENTIONED_IN_COMMIT`, `ISSUE_LABEL_ADDED`, `ISSUE_LABEL_REMOVED`, `ISSUE_LAST_EDITED`, `ISSUE_STAGE_END`, `MERGE_REQUEST_CLOSED`, `MERGE_REQUEST_CREATED`, `MERGE_REQUEST_FIRST_ASSIGNED_AT`, `MERGE_REQUEST_FIRST_COMMIT_AT`, `MERGE_REQUEST_FIRST_DEPLOYTED_TO_PRODUCTION`, `MERGE_REQUEST_LABEL_ADDED`, `MERGE_REQUEST_LABEL_REMOVED`, `MERGE_REQUEST_LAST_BUILD_FINISHED`, `MERGE_REQUEST_LAST_BUILD_STARTED`, `MERGE_REQUEST_LAST_EDITED`, `MERGE_REQUEST_MERGED`, `MERGE_REQUEST_REVIEWER_FIRST_ASSIGNED`, `MERGE_REQUEST_PLAN_STAGE_START`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/value_stream_analytics#end_event_identifier ValueStreamAnalytics#end_event_identifier}

---

##### `EndEventLabelId`<sup>Optional</sup> <a name="EndEventLabelId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.endEventLabelId"></a>

```go
EndEventLabelId *string
```

- *Type:* *string

Label ID associated with the end event identifier. In the format of `gid://gitlab/GroupLabel/<id>` or `gid://gitlab/ProjectLabel/<id>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/value_stream_analytics#end_event_label_id ValueStreamAnalytics#end_event_label_id}

---

##### `Hidden`<sup>Optional</sup> <a name="Hidden" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.hidden"></a>

```go
Hidden interface{}
```

- *Type:* interface{}

Boolean whether the stage is hidden, GitLab provided default stages are hidden by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/value_stream_analytics#hidden ValueStreamAnalytics#hidden}

---

##### `StartEventIdentifier`<sup>Optional</sup> <a name="StartEventIdentifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.startEventIdentifier"></a>

```go
StartEventIdentifier *string
```

- *Type:* *string

Start event identifier.

Valid values are: `CODE_STAGE_START`, `ISSUE_CLOSED`, `ISSUE_CREATED`, `ISSUE_DEPLOYED_TO_PRODUCTION`, `ISSUE_FIRST_ADDED_TO_BOARD`, `ISSUE_FIRST_ADDED_TO_ITERATION`, `ISSUE_FIRST_ASSIGNED_AT`, `ISSUE_FIRST_ASSOCIATED_WITH_MILESTONE`, `ISSUE_FIRST_MENTIONED_IN_COMMIT`, `ISSUE_LABEL_ADDED`, `ISSUE_LABEL_REMOVED`, `ISSUE_LAST_EDITED`, `ISSUE_STAGE_END`, `MERGE_REQUEST_CLOSED`, `MERGE_REQUEST_CREATED`, `MERGE_REQUEST_FIRST_ASSIGNED_AT`, `MERGE_REQUEST_FIRST_COMMIT_AT`, `MERGE_REQUEST_FIRST_DEPLOYTED_TO_PRODUCTION`, `MERGE_REQUEST_LABEL_ADDED`, `MERGE_REQUEST_LABEL_REMOVED`, `MERGE_REQUEST_LAST_BUILD_FINISHED`, `MERGE_REQUEST_LAST_BUILD_STARTED`, `MERGE_REQUEST_LAST_EDITED`, `MERGE_REQUEST_MERGED`, `MERGE_REQUEST_REVIEWER_FIRST_ASSIGNED`, `MERGE_REQUEST_PLAN_STAGE_START`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/value_stream_analytics#start_event_identifier ValueStreamAnalytics#start_event_identifier}

---

##### `StartEventLabelId`<sup>Optional</sup> <a name="StartEventLabelId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.startEventLabelId"></a>

```go
StartEventLabelId *string
```

- *Type:* *string

Label ID associated with the start event identifier. In the format of `gid://gitlab/GroupLabel/<id>` or `gid://gitlab/ProjectLabel/<id>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.8.0/docs/resources/value_stream_analytics#start_event_label_id ValueStreamAnalytics#start_event_label_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ValueStreamAnalyticsStagesList <a name="ValueStreamAnalyticsStagesList" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/valuestreamanalytics"

valuestreamanalytics.NewValueStreamAnalyticsStagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ValueStreamAnalyticsStagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.get"></a>

```go
func Get(index *f64) ValueStreamAnalyticsStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ValueStreamAnalyticsStagesOutputReference <a name="ValueStreamAnalyticsStagesOutputReference" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/valuestreamanalytics"

valuestreamanalytics.NewValueStreamAnalyticsStagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ValueStreamAnalyticsStagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetCustom">ResetCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetEndEventIdentifier">ResetEndEventIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetEndEventLabelId">ResetEndEventLabelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetHidden">ResetHidden</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetStartEventIdentifier">ResetStartEventIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetStartEventLabelId">ResetStartEventLabelId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustom` <a name="ResetCustom" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetCustom"></a>

```go
func ResetCustom()
```

##### `ResetEndEventIdentifier` <a name="ResetEndEventIdentifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetEndEventIdentifier"></a>

```go
func ResetEndEventIdentifier()
```

##### `ResetEndEventLabelId` <a name="ResetEndEventLabelId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetEndEventLabelId"></a>

```go
func ResetEndEventLabelId()
```

##### `ResetHidden` <a name="ResetHidden" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetHidden"></a>

```go
func ResetHidden()
```

##### `ResetStartEventIdentifier` <a name="ResetStartEventIdentifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetStartEventIdentifier"></a>

```go
func ResetStartEventIdentifier()
```

##### `ResetStartEventLabelId` <a name="ResetStartEventLabelId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetStartEventLabelId"></a>

```go
func ResetStartEventLabelId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.customInput">CustomInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventIdentifierInput">EndEventIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventLabelIdInput">EndEventLabelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.hiddenInput">HiddenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventIdentifierInput">StartEventIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventLabelIdInput">StartEventLabelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.custom">Custom</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventIdentifier">EndEventIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventLabelId">EndEventLabelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.hidden">Hidden</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventIdentifier">StartEventIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventLabelId">StartEventLabelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.customInput"></a>

```go
func CustomInput() interface{}
```

- *Type:* interface{}

---

##### `EndEventIdentifierInput`<sup>Optional</sup> <a name="EndEventIdentifierInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventIdentifierInput"></a>

```go
func EndEventIdentifierInput() *string
```

- *Type:* *string

---

##### `EndEventLabelIdInput`<sup>Optional</sup> <a name="EndEventLabelIdInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventLabelIdInput"></a>

```go
func EndEventLabelIdInput() *string
```

- *Type:* *string

---

##### `HiddenInput`<sup>Optional</sup> <a name="HiddenInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.hiddenInput"></a>

```go
func HiddenInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StartEventIdentifierInput`<sup>Optional</sup> <a name="StartEventIdentifierInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventIdentifierInput"></a>

```go
func StartEventIdentifierInput() *string
```

- *Type:* *string

---

##### `StartEventLabelIdInput`<sup>Optional</sup> <a name="StartEventLabelIdInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventLabelIdInput"></a>

```go
func StartEventLabelIdInput() *string
```

- *Type:* *string

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.custom"></a>

```go
func Custom() interface{}
```

- *Type:* interface{}

---

##### `EndEventIdentifier`<sup>Required</sup> <a name="EndEventIdentifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventIdentifier"></a>

```go
func EndEventIdentifier() *string
```

- *Type:* *string

---

##### `EndEventLabelId`<sup>Required</sup> <a name="EndEventLabelId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventLabelId"></a>

```go
func EndEventLabelId() *string
```

- *Type:* *string

---

##### `Hidden`<sup>Required</sup> <a name="Hidden" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.hidden"></a>

```go
func Hidden() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StartEventIdentifier`<sup>Required</sup> <a name="StartEventIdentifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventIdentifier"></a>

```go
func StartEventIdentifier() *string
```

- *Type:* *string

---

##### `StartEventLabelId`<sup>Required</sup> <a name="StartEventLabelId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventLabelId"></a>

```go
func StartEventLabelId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



