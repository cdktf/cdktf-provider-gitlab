# `projectVariable` Submodule <a name="`projectVariable` Submodule" id="@cdktf/provider-gitlab.projectVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectVariable <a name="ProjectVariable" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_variable gitlab_project_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer"></a>

```typescript
import { projectVariable } from '@cdktf/provider-gitlab'

new projectVariable.ProjectVariable(scope: Construct, id: string, config: ProjectVariableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig">ProjectVariableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig">ProjectVariableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetEnvironmentScope">resetEnvironmentScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetHidden">resetHidden</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetMasked">resetMasked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetProtected">resetProtected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetRaw">resetRaw</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetVariableType">resetVariableType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnvironmentScope` <a name="resetEnvironmentScope" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetEnvironmentScope"></a>

```typescript
public resetEnvironmentScope(): void
```

##### `resetHidden` <a name="resetHidden" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetHidden"></a>

```typescript
public resetHidden(): void
```

##### `resetMasked` <a name="resetMasked" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetMasked"></a>

```typescript
public resetMasked(): void
```

##### `resetProtected` <a name="resetProtected" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetProtected"></a>

```typescript
public resetProtected(): void
```

##### `resetRaw` <a name="resetRaw" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetRaw"></a>

```typescript
public resetRaw(): void
```

##### `resetVariableType` <a name="resetVariableType" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.resetVariableType"></a>

```typescript
public resetVariableType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectVariable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.isConstruct"></a>

```typescript
import { projectVariable } from '@cdktf/provider-gitlab'

projectVariable.ProjectVariable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.isTerraformElement"></a>

```typescript
import { projectVariable } from '@cdktf/provider-gitlab'

projectVariable.ProjectVariable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.isTerraformResource"></a>

```typescript
import { projectVariable } from '@cdktf/provider-gitlab'

projectVariable.ProjectVariable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.generateConfigForImport"></a>

```typescript
import { projectVariable } from '@cdktf/provider-gitlab'

projectVariable.ProjectVariable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ProjectVariable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectVariable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_variable#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.environmentScopeInput">environmentScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.hiddenInput">hiddenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.maskedInput">maskedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.protectedInput">protectedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.rawInput">rawInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.variableTypeInput">variableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.environmentScope">environmentScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.hidden">hidden</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.masked">masked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.protected">protected</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.raw">raw</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.variableType">variableType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `environmentScopeInput`<sup>Optional</sup> <a name="environmentScopeInput" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.environmentScopeInput"></a>

```typescript
public readonly environmentScopeInput: string;
```

- *Type:* string

---

##### `hiddenInput`<sup>Optional</sup> <a name="hiddenInput" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.hiddenInput"></a>

```typescript
public readonly hiddenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `maskedInput`<sup>Optional</sup> <a name="maskedInput" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.maskedInput"></a>

```typescript
public readonly maskedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `protectedInput`<sup>Optional</sup> <a name="protectedInput" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.protectedInput"></a>

```typescript
public readonly protectedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rawInput`<sup>Optional</sup> <a name="rawInput" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.rawInput"></a>

```typescript
public readonly rawInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `variableTypeInput`<sup>Optional</sup> <a name="variableTypeInput" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.variableTypeInput"></a>

```typescript
public readonly variableTypeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `environmentScope`<sup>Required</sup> <a name="environmentScope" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.environmentScope"></a>

```typescript
public readonly environmentScope: string;
```

- *Type:* string

---

##### `hidden`<sup>Required</sup> <a name="hidden" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.hidden"></a>

```typescript
public readonly hidden: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `masked`<sup>Required</sup> <a name="masked" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.masked"></a>

```typescript
public readonly masked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `protected`<sup>Required</sup> <a name="protected" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.protected"></a>

```typescript
public readonly protected: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `raw`<sup>Required</sup> <a name="raw" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.raw"></a>

```typescript
public readonly raw: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `variableType`<sup>Required</sup> <a name="variableType" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.variableType"></a>

```typescript
public readonly variableType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectVariable.ProjectVariable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectVariableConfig <a name="ProjectVariableConfig" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.Initializer"></a>

```typescript
import { projectVariable } from '@cdktf/provider-gitlab'

const projectVariableConfig: projectVariable.ProjectVariableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.key">key</a></code> | <code>string</code> | The name of the variable. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.project">project</a></code> | <code>string</code> | The name or id of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.value">value</a></code> | <code>string</code> | The value of the variable. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.description">description</a></code> | <code>string</code> | The description of the variable. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.environmentScope">environmentScope</a></code> | <code>string</code> | The environment scope of the variable. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.hidden">hidden</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to `true`, the value of the variable will be hidden in the CI/CD User Interface. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.masked">masked</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to `true`, the value of the variable will be masked in job logs. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.protected">protected</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to `true`, the variable will be passed only to pipelines running on protected branches and tags. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.raw">raw</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the variable is treated as a raw string. When true, variables in the value are not expanded. |
| <code><a href="#@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.variableType">variableType</a></code> | <code>string</code> | The type of a variable. Valid values are: `env_var`, `file`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_variable#key ProjectVariable#key}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The name or id of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_variable#project ProjectVariable#project}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_variable#value ProjectVariable#value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_variable#description ProjectVariable#description}

---

##### `environmentScope`<sup>Optional</sup> <a name="environmentScope" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.environmentScope"></a>

```typescript
public readonly environmentScope: string;
```

- *Type:* string

The environment scope of the variable.

Defaults to all environment (`*`). Note that in Community Editions of Gitlab, values other than `*` will cause inconsistent plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_variable#environment_scope ProjectVariable#environment_scope}

---

##### `hidden`<sup>Optional</sup> <a name="hidden" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.hidden"></a>

```typescript
public readonly hidden: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to `true`, the value of the variable will be hidden in the CI/CD User Interface.

The value must meet the [hidden requirements](https://docs.gitlab.com/ci/variables/#hide-a-cicd-variable).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_variable#hidden ProjectVariable#hidden}

---

##### `masked`<sup>Optional</sup> <a name="masked" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.masked"></a>

```typescript
public readonly masked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to `true`, the value of the variable will be masked in job logs.

The value must meet the [masking requirements](https://docs.gitlab.com/ee/ci/variables/#mask-a-cicd-variable).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_variable#masked ProjectVariable#masked}

---

##### `protected`<sup>Optional</sup> <a name="protected" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.protected"></a>

```typescript
public readonly protected: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to `true`, the variable will be passed only to pipelines running on protected branches and tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_variable#protected ProjectVariable#protected}

---

##### `raw`<sup>Optional</sup> <a name="raw" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.raw"></a>

```typescript
public readonly raw: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the variable is treated as a raw string. When true, variables in the value are not expanded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_variable#raw ProjectVariable#raw}

---

##### `variableType`<sup>Optional</sup> <a name="variableType" id="@cdktf/provider-gitlab.projectVariable.ProjectVariableConfig.property.variableType"></a>

```typescript
public readonly variableType: string;
```

- *Type:* string

The type of a variable. Valid values are: `env_var`, `file`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_variable#variable_type ProjectVariable#variable_type}

---



