# `instanceVariable` Submodule <a name="`instanceVariable` Submodule" id="@cdktf/provider-gitlab.instanceVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InstanceVariable <a name="InstanceVariable" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/instance_variable gitlab_instance_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.Initializer"></a>

```typescript
import { instanceVariable } from '@cdktf/provider-gitlab'

new instanceVariable.InstanceVariable(scope: Construct, id: string, config: InstanceVariableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig">InstanceVariableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig">InstanceVariableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.resetMasked">resetMasked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.resetProtected">resetProtected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.resetRaw">resetRaw</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.resetVariableType">resetVariableType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMasked` <a name="resetMasked" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.resetMasked"></a>

```typescript
public resetMasked(): void
```

##### `resetProtected` <a name="resetProtected" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.resetProtected"></a>

```typescript
public resetProtected(): void
```

##### `resetRaw` <a name="resetRaw" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.resetRaw"></a>

```typescript
public resetRaw(): void
```

##### `resetVariableType` <a name="resetVariableType" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.resetVariableType"></a>

```typescript
public resetVariableType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a InstanceVariable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.isConstruct"></a>

```typescript
import { instanceVariable } from '@cdktf/provider-gitlab'

instanceVariable.InstanceVariable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.isTerraformElement"></a>

```typescript
import { instanceVariable } from '@cdktf/provider-gitlab'

instanceVariable.InstanceVariable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.isTerraformResource"></a>

```typescript
import { instanceVariable } from '@cdktf/provider-gitlab'

instanceVariable.InstanceVariable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.generateConfigForImport"></a>

```typescript
import { instanceVariable } from '@cdktf/provider-gitlab'

instanceVariable.InstanceVariable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a InstanceVariable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InstanceVariable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InstanceVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/instance_variable#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the InstanceVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.maskedInput">maskedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.protectedInput">protectedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.rawInput">rawInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.variableTypeInput">variableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.masked">masked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.protected">protected</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.raw">raw</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.variableType">variableType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `maskedInput`<sup>Optional</sup> <a name="maskedInput" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.maskedInput"></a>

```typescript
public readonly maskedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `protectedInput`<sup>Optional</sup> <a name="protectedInput" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.protectedInput"></a>

```typescript
public readonly protectedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rawInput`<sup>Optional</sup> <a name="rawInput" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.rawInput"></a>

```typescript
public readonly rawInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `variableTypeInput`<sup>Optional</sup> <a name="variableTypeInput" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.variableTypeInput"></a>

```typescript
public readonly variableTypeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `masked`<sup>Required</sup> <a name="masked" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.masked"></a>

```typescript
public readonly masked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `protected`<sup>Required</sup> <a name="protected" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.protected"></a>

```typescript
public readonly protected: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `raw`<sup>Required</sup> <a name="raw" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.raw"></a>

```typescript
public readonly raw: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `variableType`<sup>Required</sup> <a name="variableType" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.variableType"></a>

```typescript
public readonly variableType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InstanceVariableConfig <a name="InstanceVariableConfig" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.Initializer"></a>

```typescript
import { instanceVariable } from '@cdktf/provider-gitlab'

const instanceVariableConfig: instanceVariable.InstanceVariableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.key">key</a></code> | <code>string</code> | The name of the variable. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.value">value</a></code> | <code>string</code> | The value of the variable. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.description">description</a></code> | <code>string</code> | The description of the variable. Maximum of 255 characters. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/instance_variable#id InstanceVariable#id}. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.masked">masked</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to `true`, the value of the variable will be hidden in job logs. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.protected">protected</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to `true`, the variable will be passed only to pipelines running on protected branches and tags. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.raw">raw</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the variable is treated as a raw string. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.variableType">variableType</a></code> | <code>string</code> | The type of a variable. Valid values are: `env_var`, `file`. Default is `env_var`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/instance_variable#key InstanceVariable#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/instance_variable#value InstanceVariable#value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the variable. Maximum of 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/instance_variable#description InstanceVariable#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/instance_variable#id InstanceVariable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `masked`<sup>Optional</sup> <a name="masked" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.masked"></a>

```typescript
public readonly masked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to `true`, the value of the variable will be hidden in job logs.

The value must meet the [masking requirements](https://docs.gitlab.com/ci/variables/#masked-variables). Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/instance_variable#masked InstanceVariable#masked}

---

##### `protected`<sup>Optional</sup> <a name="protected" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.protected"></a>

```typescript
public readonly protected: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to `true`, the variable will be passed only to pipelines running on protected branches and tags.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/instance_variable#protected InstanceVariable#protected}

---

##### `raw`<sup>Optional</sup> <a name="raw" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.raw"></a>

```typescript
public readonly raw: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the variable is treated as a raw string.

Default: false. When true, variables in the value are not expanded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/instance_variable#raw InstanceVariable#raw}

---

##### `variableType`<sup>Optional</sup> <a name="variableType" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.variableType"></a>

```typescript
public readonly variableType: string;
```

- *Type:* string

The type of a variable. Valid values are: `env_var`, `file`. Default is `env_var`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/instance_variable#variable_type InstanceVariable#variable_type}

---



